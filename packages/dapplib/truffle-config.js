require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rebel pitch solid hidden another army gentle'; 
let testAccounts = [
"0x4db456fb25d68312c25ecad7507bcbe7a315cc4ccdcad861354768fe53dc2cf2",
"0xfef86e372669a4de08f95698d2bbe6abf9b7449197898b5f793236b89056bfdd",
"0x9b89bdb37ec9959bb991588b7146c3879e732cdb8bdc235fcdb39f80e7a9112d",
"0xe88c6431091e589f0e7b4651d9943a3b5925ab8259873baca23f3d12502965a0",
"0xebaa3a5250667558fa6900a018c47a7a2cfebdfec9363e7327c78b4c179faf3c",
"0xb8caab87403da5abc2d71d97d4523d8cbd2f867bf4b8cb5410e75d9563154d3e",
"0xe0991827b7ef651a0115c4ed1a414226e2eb639cd4d5c5c4705439d166feed79",
"0x2a93a8def3b94ae5cce7c68c5fa86b862764ed4bf8d5b21b401956635703c9a3",
"0x46cc22c7f5a506207b32d89ab3e76a28c4eae017ca18f07bd15dcac0f5f2b724",
"0x96c10a6e475291502cf675716b7b9c353300d2fd1efa3fe30720fc74ba42f459"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

