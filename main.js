// Task 4: Create the Main Application

// Import calculatePortfolioValue, getPortfolioAllocation, and Transaction class
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import Transaction from './transaction.js';

// Display the total portfolio value and allocation percentages
console.log("Portfolio Value:", calculatePortfolioValue());
console.log("Portfolio Allocation:", getPortfolioAllocation());

// Create new transactions
const transaction = new Transaction();

transaction.addTransaction(301, "buy", 0.5);  // Buy 0.5 Bitcoin
transaction.addTransaction(102, "sell", 1);   // Sell 1 Google stock

// Display the updated portfolio value after transactions
console.log("Updated Portfolio Value after Transactions:", transaction.calculatePortfolioValue());