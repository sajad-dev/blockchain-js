const Block = require("../blockchain/block");

class Mining {
  static mining({ timestamp, lastHash, trx, definity }) {
    let nonce = 0
    while (true) {
      nonce++;
      const block = new Block({ lastHash, nonce, timestamp, trx }).mining();
      if (block.hash.substring(0, definity) == "0".repeat(definity)) {
        break;
      }
    }
    return new Block({ lastHash, nonce, timestamp, trx }).mining();
  }
}

module.exports = Mining