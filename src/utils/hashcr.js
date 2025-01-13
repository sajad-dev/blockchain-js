const crypto = require("crypto");

class HashCr {
  static hash(inputs) {
    if (inputs == null || inputs == undefined) {
      throw new Error("Input data can't Null");
    }
    const inputs_json = JSON.stringify(inputs);
    return crypto.createHash("sha256").update(inputs_json).digest("hex");
  }
}

module.exports = HashCr;
