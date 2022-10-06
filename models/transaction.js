const {  Sequelize ,DataTypes, Model } = require('sequelize');

module.exports.TransactionsObj = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  transaction_hash: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  transaction_receipts: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  transaction_dump: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  status:{
    type:DataTypes.BOOLEAN
}
}

