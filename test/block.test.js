const Block = require("../src/blockchain/block");
const { hash } = require("../src/utils/hashcr");
const { GENESIS } = require("../src/config/setup");

describe("Block test", () => {
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

  it("Check attribute", () => {
    expect(block.timestamp).toEqual(timestamp, "Timestamp");
    expect(block.lastHash).toEqual(lastHash, "LastHash");
    expect(block.nonce).toEqual(nonce, "Nonce");
    expect(block.definity).toEqual(definity, "definity");
    expect(block.trx).toEqual(trx, "trx");
  });

  it("Check Genesis", () => {
    expect(Block.genesis().hash).toEqual(hash(GENESIS), "Wrong genesis");
  });
  it("Mining", () => {
    expect(block.mining().hash).toEqual(
      hash({
        timestamp,
        trx,
        lastHash,
        definity,
        nonce,
      }),
      "Wrong genesis"
    );
  });
});
