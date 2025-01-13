const { GENESIS } = require("../config/setup");
const { hash } = require("../utils/hashcr");

class Block {
  timestamp;
  trx;
  lastHash;
  definity;
  nonce;
  hash;

  constructor({ timestamp, trx, lastHash, definity, nonce }) {
    this.definity = definity;
    this.timestamp = timestamp;
    this.trx = trx;
    this.nonce = nonce;
    this.lastHash = lastHash;
  }

  static mining() {
    const block = {
      timestamp: this.timestamp,
      trx: this.trx,
      lastHash: this.lastHash,
      definity: this.definity,
      nonce: this.definity,
    };
    block["hash"] = hash(block);
    return block;
  }

  static genesis() {
    const genesis = {...GENESIS};
    genesis.hash = hash(GENESIS);
    return genesis;
  }

  static mining() {}
  //
}

module.exports = Block;
