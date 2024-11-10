// Task 3: Create the Transaction Module

import { assets, getAssetById } from './asset.js';

// Default export: Transaction class
class Transaction {
    constructor() {
        this.transactions = [];
    }

    addTransaction(assetId, type, quantity) {
        const asset = getAssetById(assetId);
        if (!asset) {
            throw new Error("Asset not found");
        }

        if (type === "sell" && asset.quantity < quantity) {
            throw new Error(`Insufficient quantity for sale of ${asset.name}`);
        }

        // Update the asset's quantity based on the transaction type
        if (type === "buy") {
            asset.quantity += quantity;
        } else if (type === "sell") {
            asset.quantity -= quantity;
        }

        // Record the transaction
        this.transactions.push({ assetId, type, quantity });
    }

    // Calculate the updated portfolio value after all transactions
    calculatePortfolioValue() {
        return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
    }
}

export default Transaction;