const { hash } = require("../utils/hashcr");

class Blockchain {
  blockList;
  definity;

  constructor({ blockList, definity }) {
    this.blockList = blockList;
    this.definity = definity;
  }

  addBlock(block) {
    if (block.hash.substring(0, this.definity) === "0".repeat(this.definity)) {
      this.blockList.push(block);
    }
  }

  lengthBlock() {
    return this.blockList.length;
  }

  replace(blockList) {
    const blockChain = new Blockchain({ blockList });

    if (blockChain.isValid()) {
      if (blockList.length <= this.blockList.length) {
        return false;
      }

      const isDifferent = blockList.some(
        (val, ind) => val.hash === this.blockList[ind]?.hash
      );
      if (!isDifferent) return false;

      this.blockList = blockList;
      return true;
    }

    return false;
  }

  getBlock(ind) {
    return ind >= 0 && ind < this.lengthBlock()
      ? this.blockList[ind]
      : undefined;
  }
  
  isValid() {
    this.blockList.map((val, ind) => {
      if (ind != 0) {
        let { hash1, ...block1 } = val;
        let { hash2, ...block2 } = this.blockList[ind - 1];
        if (hash1 == hash(block1) && hash2 == hash(block2) && hash1 == hash2) {
          return false;
        }
      }
    });
    return true;
  }
}

module.exports = Blockchain;
