# ISM-3232-Coding-Project-15
Coding Project: Financial Portfolio Management System Using JavaScript Modules

Introduction
In this challenge, you will create a Financial Portfolio Management System that allows users to track and analyze investments. The system will be structured using ES6 JavaScript modules, focusing on reusability, modularity, and maintainability. You'll separate the code into modules for managing assets, calculating portfolio statistics, and simulating transactions, making it easier to extend as the portfolio grows.

Business Case
Scenario: A financial management firm wants to build a web-based system for managing clients' investment portfolios. The system should allow users to track their assets, calculate portfolio statistics, and simulate transactions. By organizing functionality into modules, the firm aims to create a system that can be maintained and expanded as needed.

Requirements

The system will have three main modules:

Asset Module: Manages information about individual financial assets.
Portfolio Module: Tracks a user's portfolio and calculates key statistics.
Transaction Module: Simulates buying and selling of assets.

Tasks
1. Create the Asset Module

File: asset.js
Define and export an array of assets, where each asset has an id, name, type (e.g., “stock,” “bond”), price, and quantity.
Export a function getAssetById(id) that returns asset details based on the provided id.

Commit: Create asset module with asset list and getAssetById function.

2. Create the Portfolio Module

File: portfolio.js
Import the assets array from asset.js.
Define and export a function calculatePortfolioValue() that sums the total value of the portfolio by multiplying the price and quantity of each asset.
Export a function getPortfolioAllocation() that calculates the percentage allocation of each asset in the portfolio.

Commit: Create portfolio module with calculatePortfolioValue and getPortfolioAllocation functions.

3. Create the Transaction Module

File: transaction.js
Import assets and getAssetById from asset.js.
Define and export a class Transaction, which:
Takes an assetId, type (either "buy" or "sell"), and quantity.
Updates the asset’s quantity based on the transaction type.
Checks if enough quantity is available for a sale; if not, it should throw an error: "Insufficient quantity for sale of [Asset Name]".

Commit: Create transaction module with Transaction class.

4. Create the Main Application

File: main.js
Import calculatePortfolioValue, getPortfolioAllocation, and Transaction class.
Display the total portfolio value and allocation percentages.
Create a few Transaction instances for different assets and display the transaction details.
Display the updated portfolio value after transactions.

Commit: Implement main application and log portfolio details and transactions.

Submission Guidelines
GitHub Repository: Include your asset.js, portfolio.js, transaction.js, and main.js files. Ensure that your code is well-organized and commented for clarity.
Repository Link: Make the repository public or accessible to instructors. Share the direct URL.

Expected Outcomes
After completing this challenge, students will:

Learn to structure code with JavaScript ES6 modules, enhancing modularity and code clarity.
Gain experience with object-oriented programming concepts and implementing business logic.
Apply portfolio management concepts such as asset allocation and transaction processing in a real-world context.
This coding challenge illustrates how ES6 modules help organize code effectively, supporting growth and maintainability in a financial management system.