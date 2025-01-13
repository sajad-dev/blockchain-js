const Wallet = require("../src/blockchain/wallet");

const BALANCE = 10000;

describe("wallet", () => {
  const wallet = new Wallet({ blanca: BALANCE });

  let privateK;
  let sin;
  const data = "Data";

  it("Wallet attribute", () => {
    expect(wallet.blanca).toEqual(BALANCE, "balance");
  });

  it("Get key", () => {
    const { privateKey } = wallet.setKey();
    privateK = privateKey;
    expect(wallet.publicKey).toBeDefined();
  });

  it("create sin", () => {
    sin = Wallet.sinData(data, privateK);
    expect(sin).toBeDefined();
  });

  it("verify sin", () => {
    expect(wallet.verifySin(data, wallet.publicKey, sin)).toBe(true);
  });
});
