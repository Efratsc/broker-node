const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction-controller');

// POST /transactions - Create a new transaction
router.post('/transactions', transactionController.createTransaction);

// GET /transactions - Get all transactions
router.get('/transactions', transactionController.getAllTransactions);


module.exports = router;
