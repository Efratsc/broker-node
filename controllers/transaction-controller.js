const Transaction = require('../models/transaction-models');
const User = require('../models/user-model');

// POST /transactions - Create a new transaction
async function createTransaction(req, res) {
  const { user_id, transaction_type } = req.body;
  try {
    // Retrieve the sender user
    const sender = await User.findByPk(user_id);
    const amount = 100;

    // Create the transaction record
    const transaction = await Transaction.create({
      user_id,
      amount,
      transaction_type
    });
    const receiver = await User.findOne({
      where: {
        id: {
          [Op.not]: user_id // Exclude the sender user
        }
      },
      order: sequelize.random() // Fetch a random user
    });

    const transactionResult = {
      id: transaction.id,
      sender: {
        id: sender.id,
        username: sender.username
      },
      receiver: {
        id: receiver.id,
        username: receiver.username
      },
      amount,
      transaction_type
    };

    res.status(201).json(transactionResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
}
async function getAllTransactions(req, res) {
    try {
      const transactions = await Transaction.findAll({
        include: [
          {
            model: User,
            as: 'sender',
            attributes: ['id', 'username']
          },
          {
            model: User,
            as: 'receiver',
            attributes: ['id', 'username']
          }
        ]
      });
  
      res.json(transactions);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve transactions' });
    }
  }

module.exports = {
  createTransaction,
  getAllTransactions
};
