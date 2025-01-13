const Blockchain = require("../src/blockchain/blockchain");
const Block = require("../src/blockchain/block");
const { hash } = require("../src/utils/hashcr");

describe("Blockchain Test", () => {
  const timestamp = 0;
  const lastHash = hash(Block.genesis());
  const nonce = 0;
  const definity = 3;
  const trx = [];

  const block = new Block({
    timestamp,
    lastHash,
    nonce,
    definity,
    trx,
  });
  const blockList = [Block.genesis, block.mining()];
  const blockChain = new Blockchain({ blockList });

  let block2 = new Block({
    timestamp,
    lastHash: block.hash,
    nonce,
    definity,
    trx,
  });
  const blockList2 = [Block.genesis, block2.mining(), block2];

  let block3 = new Block({
    timestamp,
    lastHash,
    nonce,
    definity,
    trx,
  });
  const blockList3 = [Block.genesis, block3.mining(), block2];

  it("Check attribute block", () => {
    expect(blockChain.timestamp).toEqual(blockList, "block List");
  });

  it("Check Valid blockchain", () => {
    let valid;
    blockList.map((key, value) => {
      if (key != 0 && value.hash != blockList[key - 1]) {
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
  it("Check add block", () => {
    blockChain.add(block2);

    expect(blockChain.blockList[blockChain.blockList.length - 1].hash).toEqual(
      block2.hash
    );
  });
});
