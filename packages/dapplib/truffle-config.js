require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rifle rural solid hover clinic metal genre'; 
let testAccounts = [
"0x1c6c7550b9c79a29a14d76de694601633611a767a2dd91b68ee6cd3c4d4e6ece",
"0x2b3b8436a089fd381da8afd79d3a43309222cd043ba0dd83029b2fcea74a6cea",
"0xa57e9e1ba03b81869942b0c8fa1f6102dd1ad11563768539de1bb578819079ed",
"0x3ef2c52f066bc6554d1c1e501f7d2078aa170f724344f3aed2a5e7f366424b83",
"0xc74996bbd80b9e63092fc4399f6e39d94a96d29a7d17e35071d29e40e3199aa8",
"0x1d9d414efb2a5ba3b96f8d836b55c462b71257d02a62e2f8407dc3366ae2e4d7",
"0xeec18e498f41e9867d1741ea45ac37427352c706e557db0c6ec00ef60fd63b81",
"0x4d013c8bec9e53916921eb2ab994a18db121ddd5e656c30e5e94b032d99aaf80",
"0x653dddbce24c256dedcb34542c7e826086d453f5a9afc6c94537e24c568220dd",
"0x83c976e23dbf0538cd31edf6ce0bc3ef02b1cf8ff1464c1b083e5d835affe0f6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

