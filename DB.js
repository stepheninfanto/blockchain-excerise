// const { Sequelize } = require('sequelize');
const {  Sequelize ,DataTypes, Model } = require('sequelize');

const {TransactionsObj } = require('./models/transaction');
// Option 1: Passing a connection URI


async function dbConnection(txList,dbCreds){

  const sequelize = new Sequelize('transactionsDB', 'postgres', 'XXXX', {
    host: 'localhost',
    dialect: 'postgres',
    sync:true
  });

  var Transactions = sequelize.define('Transactions',TransactionsObj,
  {
    tableName: 'Transactions'
  })

  try {
    await sequelize.authenticate();
   await Transactions.sync();
    console.log('Connection has been established successfully.');
    await  Transactions.create({
      transaction_hash:"x",
      transaction_receipts:"y",
      transaction_dump:JSON.stringify({}),
      status:true
    })
    
    //insert data
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  return sequelize;
}


module.exports = dbConnection;
