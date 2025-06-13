# Blockchain Implementation in JavaScript

A simple blockchain implementation in JavaScript with Proof of Work consensus, digital signatures, and wallet functionality.

## Features

- **Block Creation**: Create blocks with transactions, timestamps, and nonces
- **Proof of Work**: Mining algorithm with adjustable difficulty
- **Digital Signatures**: Cryptographic signing and verification using elliptic curves
- **Wallet System**: Key generation and balance management
- **Blockchain Validation**: Chain integrity verification
- **Genesis Block**: Predefined first block initialization

## Project Structure

```
blockchain/
├── src/
│   ├── blockchain/
│   │   ├── block.js          # Block class implementation
│   │   ├── blockchain.js     # Blockchain class with validation
│   │   ├── transaction.js    # Transaction handling (placeholder)
│   │   └── wallet.js         # Wallet and cryptographic functions
│   ├── config/
│   │   └── setup.js          # Genesis block configuration
│   └── utils/
│       ├── hashcr.js         # Hashing utilities
│       └── mining.js         # Proof of Work mining algorithm
├── test/                     # Test files
├── package.json
└── .gitignore
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sajad-dev/blockchain-js.git
cd blockchain-js
```

2. Install dependencies:
```bash
npm install
```

## Dependencies

- **elliptic**: For elliptic curve cryptography
- **jest**: Testing framework
- **mocha**: Additional testing framework

## Usage

### Creating a Block

```javascript
const Block = require('./src/blockchain/block');

const block = new Block({
  timestamp: Date.now(),
  trx: [],           // transactions
  lastHash: 'previous_block_hash',
  nonce: 0
});

const minedBlock = block.mining();
```

### Creating a Blockchain

```javascript
const Blockchain = require('./src/blockchain/blockchain');
const Block = require('./src/blockchain/block');

const blockchain = new Blockchain({
  blockList: [Block.genesis()],
  definity: 2  // difficulty level (number of leading zeros)
});
```

### Mining a Block

```javascript
const { mining } = require('./src/utils/mining');

const newBlock = mining({
  timestamp: Date.now(),
  lastHash: blockchain.getBlock(-1).hash,
  trx: [],
  definity: 2
});

blockchain.addBlock(newBlock);
```

### Working with Wallets

```javascript
const Wallet = require('./src/blockchain/wallet');

const wallet = new Wallet({ blanca: 10000 });
const { privateKey, publicKey } = wallet.setKey();

// Sign data
const signature = Wallet.sinData("transaction_data", privateKey);

// Verify signature
const isValid = wallet.verifySin("transaction_data", publicKey, signature);
```

## API Reference

### Block Class

- `constructor({ timestamp, trx, lastHash, nonce })`: Creates a new block
- `mining()`: Mines the block and calculates hash
- `Block.genesis()`: Creates the genesis block

### Blockchain Class

- `constructor({ blockList, definity })`: Creates blockchain with difficulty
- `addBlock(block)`: Adds a block if it meets difficulty requirements
- `replace(blockList)`: Replaces chain with longer valid chain
- `getBlock(index)`: Retrieves block at given index
- `isValid()`: Validates the entire blockchain
- `lengthBlock()`: Returns blockchain length

### Wallet Class

- `constructor({ blanca })`: Creates wallet with initial balance
- `setKey()`: Generates public/private key pair
- `verifySin(data, publicKey, signature)`: Verifies digital signature
- `Wallet.sinData(data, privateKey)`: Signs data with private key

### Mining Utilities

- `mining({ timestamp, lastHash, trx, definity })`: Mines block with Proof of Work

## Testing

Run the test suite:

```bash
npm test
```

Test files include:
- `block.test.js`: Block creation and mining tests
- `blockchain.test.js`: Blockchain validation and operations
- `wallet.test.js`: Cryptographic functions testing
- `pow.test.js`: Proof of Work performance testing

## Configuration

The genesis block configuration is in `src/config/setup.js`:

```javascript
const GENESIS = {
  timestamp: Date.now(),
  trx: [],
  lastHash: 0,
  nonce: 0,
};
```

## Security Features

- **SHA-256 Hashing**: All blocks and transactions are hashed using SHA-256
- **Digital Signatures**: ECDSA signatures using secp256k1 curve
- **Proof of Work**: Prevents spam and secures the network
- **Chain Validation**: Ensures blockchain integrity

## Mining Process

The mining algorithm implements Proof of Work by:
1. Starting with nonce = 0
2. Calculating block hash
3. Checking if hash starts with required number of zeros
4. Incrementing nonce and repeating until valid hash found

## Difficulty Adjustment

The `definity` parameter controls mining difficulty:
- Higher values require more leading zeros
- Increases computational time exponentially
- Can be adjusted based on network requirements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

**sajad-dev**

## Future Enhancements

- [ ] Complete transaction implementation
- [ ] Network communication layer
- [ ] Dynamic difficulty adjustment
- [ ] Transaction fees
- [ ] Multi-signature support
- [ ] REST API interface
- [ ] Merkle tree implementation