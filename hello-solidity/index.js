const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

// SolidityをCompile
const sourceCode = fs.readFileSync('Greetings.sol').toString();
const compiledCode = solc.compile(sourceCode);

// ABIを取得
const contractABI = JSON.parse(compiledCode.contracts[':Greetings'].interface);
const greetingsContract = web3.eth.contract(contractABI);

// コントラクトをデプロイ
const greetingsDeployed = greetingsContract.new({
    data: compiledCode.contracts[':Greetings'].bytecode,
    from: web3.eth.accounts[0],
    gas: 4700000
});

// コントラクトインスタンスを取得
const greetingsInstance = greetingsContract.at(greetingsDeployed.address);
console.log(greetingsInstance.get());

// トランザクション発行
greetingsInstance.set('Bonjour Blockchain', {from: web3.eth.accounts[0]});
console.log(greetingsInstance.get());
