const Block = require("../src/blockchain/block");
const { mining } = require("../src/utils/mining");

const timestamp = 0;
const lastHash = Block.genesis().hash;
const trx = [];
const definity = 3;
jest.setTimeout(3000); 


describe("", () => {
  test("should complete in under 5 seconds", async () => {
     mining({ timestamp, lastHash, trx, definity });
  });
});
