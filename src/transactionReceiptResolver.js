'use strict'
var executionContext = require('./execution-context')

module.exports = class TransactionReceiptResolver {
  constructor () {
    this._transactionReceipts = {}
  }

  resolve (tx, resolvedTransaction, cb) {
    if (tx.isCall) return cb(null, "")

    if (this._transactionReceipts[tx.id]) {
      return cb(null, this._transactionReceipts[tx.id])
    }
    let ctrAddr = resolvedTransaction.hasOwnProperty("contractAddress") ? resolvedTransaction.contractAddress : resolvedTransaction.to
    let contractId = executionContext.currentChainsqlWS + resolvedTransaction.contractName + ctrAddr
    let currentTxCtrObj = executionContext.contractObjs[contractId]
    currentTxCtrObj.getPastEvent({txHash:tx.id}, (error, receipt) => {
      if (!error) {
        this._transactionReceipts[tx.id] = receipt.ContractLogs
        cb(null, receipt.ContractLogs)
      } else {
        cb(error)
      }
    })
  }
}

