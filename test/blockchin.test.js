const Blockchain = require("../src/blockchain/blockchain");
const Block = require("../src/blockchain/block");
const { hash } = require("../src/utils/hashcr");
const { mining } = require("../src/utils/mining");

describe("Blockchain Test", () => {
  const timestamp = 0;
  const lastHash = Block.genesis().hash;
  const nonce = 0;
  const trx = [];
  const definity = 2;

  const block = new Block({
    timestamp,
    lastHash,
    nonce,
    trx,
  });
  const blockList = [Block.genesis(), block.mining()];
  const blockChain = new Blockchain({ blockList, definity });

  let block2 = new Block({
    timestamp,
    lastHash,
    nonce,
    trx,
  });
  const blockList2 = [Block.genesis, block2.mining(), block2.mining()];

  let block3 = new Block({
    timestamp,
    lastHash,
    nonce,
    trx,
  });
  const blockList3 = [Block.genesis, block3.mining(), block2];

  it("Check attribute block", () => {
    expect(blockChain.blockList).toEqual(blockList, "block List");
  });

  it("Check Valid blockchain", () => {
    let valid = true;
    blockList.map((value, ind) => {
      if (ind != 0 && value.lastHash != blockList[ind - 1].hash) {
        valid = false;
        return;
      }
    });

    expect(blockChain.isValid()).toEqual(valid, "Is valid verify");
  });
  it("Check get block", () => {
    expect(blockChain.getBlock(1)).toEqual(blockList[1], "verify get block");
  });

  it("Check replace block", () => {
    expect(blockChain.replace(blockList)).toEqual(false, "Block 1");
    expect(blockChain.replace(blockList2)).toEqual(true, "Block 2");
    expect(blockChain.replace(blockList3)).toEqual(false, "Block 2");
  });
  it("add block", () => {
    const block = mining({ timestamp, lastHash, trx, definity });
    blockChain.addBlock(block);
    expect(blockChain.blockList[blockChain.blockList.length - 1]).toEqual(
      block
    );
  });
});
