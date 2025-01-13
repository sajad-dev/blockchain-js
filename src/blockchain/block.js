const { GENESIS } = require("../config/setup");
const { hash } = require("../utils/hashcr");

class Block {
  timestamp;
  trx;
  lastHash;
  nonce;
  hash;

  constructor({ timestamp, trx, lastHash, nonce }) {
    this.timestamp = timestamp;
    this.trx = trx;
    this.nonce = nonce;
    this.lastHash = lastHash;
  }

  mining() {
    const block = {
      timestamp: this.timestamp,
      trx: this.trx,
      lastHash: this.lastHash,
      nonce: this.nonce,
    };
    block["hash"] = hash(block);
    this.hash = hash(block)
    return block;
  }

  static genesis() {
    const genesis = {...GENESIS};
    genesis.hash = hash(GENESIS);
    return genesis;
  }

  //
}

module.exports = Block;
