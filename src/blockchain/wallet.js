const crypto = require("crypto");
const { extractKey } = require("../utils/hashcr");

class Wallet {
  blanca;
  publicKey;

  constructor({ blanca }) {
    this.blanca = blanca;
  }

  setKey() {
    let { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
      namedCurve: "secp256k1",
    });
    publicKey = publicKey.export({ type: "spki", format: "pem" });

    privateKey = privateKey.export({
      type: "pkcs8",
      format: "pem",
    });

    this.publicKey = publicKey;
    return { privateKey, publicKey };
  }

  verifySin(data, publicKey, signature) {
    const verify = crypto.createVerify("SHA256");
    verify.update(data);
    verify.end();
    return verify.verify(publicKey, signature, "base64");
  }

  static sinData(data, privateKey) {
    const sign = crypto.createSign("SHA256");
    sign.update(data);
    sign.end();
    const signature = sign.sign(privateKey, "base64");
    return signature;
  }
}

module.exports = Wallet;
