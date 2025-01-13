const crypto = require("crypto");

class HashCr {
  static hash(inputs) {
    return crypto.createHash("sha256").update(inputs).digest("hex");
  }
}

module.exports = HashCr;