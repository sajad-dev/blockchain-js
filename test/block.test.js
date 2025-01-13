const chai = require("chai");
const expect = chai.expect;
const block = require("../src/blockchain/block");
const { hash } = require("../src/utils/hashcr");
const { GENESIS } = require("../src/config/setup");

describe("Block test", () => {
  const timestamp = 0;
  const lastHash = hash(block.genesis);
  const nonce = 0;
  const definity = 3;
  const trx = [];

  const Block = block({
    timestamp,
    lastHash,
    nonce,
    definity,
    trx,
  });

  it("Check attribute", () => {
    expect(block.timestamp).equal(timestamp, "Timestamp");
    expect(block.lastHash).equal(lastHash, "LastHash");
    expect(block.nonce).equal(nonce, "Nonce");
    expect(block.definity).equal(definity, "definity");
    expect(block.trx).equal(trx, "trx");
  });

  it("Check Genesis", () => {
    expect(block.genesis.hash).equal(hash(GENESIS), "Wrong genesis");
  });
  it("Ming", () => {
    //Todo
  });
});
