// Task 1: Create the Asset Module

export const assets = [
    { id: 101, name: "AAPL", type: "stock", price: 150, quantity: 10 },
    { id: 102, name: "GOOGL", type: "stock", price: 2800, quantity: 5 },
    { id: 201, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 20 },
    { id: 301, name: "Bitcoin", type: "cryptocurrency", price: 45000, quantity: 1 },
    { id: 302, name: "Ethereum", type: "cryptocurrency", price: 3000, quantity: 10 },
    { id: 401, name: "Gold", type: "commodity", price: 1800, quantity: 15 },
    { id: 501, name: "Rental Property", type: "real estate", price: 250000, quantity: 1 }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
