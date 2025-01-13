class Blockchain {
  blockList;
  constructor({ blockList }) {
    this.blockList = blockList;
  }

  addBlock(block) {
    this.blockList.push(block);
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
      this.blockList.map((val, ind) => {
        if (val.hash == blockList[ind].hash) {
          return false;
        }
      });
      this.blockList = blockList;
      return true;
    }
    return false;
  }

  getBlock(ind) {
    return this.lengthBlock() - 1 && this.blockList[ind];
  }

  isValid() {
    this.blockList.map((val, ind) => {
      if (ind != 0 && val != this.blockList[ind - 1]) {
        return false;
      }
    });
    return true;
  }
}

module.exports = Blockchain;
