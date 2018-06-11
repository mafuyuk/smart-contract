```
# Gethの初期化
$ geth --datadir . init ./genesis.json

# Gethの起動
$ geth --networkid "10" --nodiscover --datadir . --rpc  --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal" --targetgaslimit "20000000" console 2>> ./error.log
 
# アカウントの作成
> personal.newAccount("password")
"0x7001a118c14a5b271c17994addaef9b7f858a464"

# アカウント一覧
> eth.accounts
["0x7001a118c14a5b271c17994addaef9b7f858a464", "0xbd45a56933e55e1c926a49b2ecafd0b68614fff1", "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40"]

# アカウント取得
> eth.accounts[0]
"0x7001a118c14a5b271c17994addaef9b7f858a464"

#コインベースアカウント（マイニング報酬を受け取るアカウント）の確認
> eth.coinbase
"0x7001a118c14a5b271c17994addaef9b7f858a464"

# コインベースの切り替え
> miner.setEtherbase(eth.accounts[1])
true
> eth.coinbase
"0xbd45a56933e55e1c926a49b2ecafd0b68614fff1"

# genesisブロックの確認
> eth.getBlock(0)

# マイニング開始
> miner.start(1)
null

# マイニングの確認
> eth.mining
true

# マイニングの停止
> miner.stop()
true


# 残高確認(wei)
> eth.getBalance(eth.accounts[0])
1.01e+21

# 残高確認(ether)
> web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
1175

# 送金前にロックを解除しないといけない
> personal.unlockAccount(eth.accounts[0])
Unlock account 0x7001a118c14a5b271c17994addaef9b7f858a464
Passphrase: 
true


# 送金
> eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(5, "ether")})

# アンロックオプション付きでの起動
> eth.accounts
["0x7001a118c14a5b271c17994addaef9b7f858a464", "0xbd45a56933e55e1c926a49b2ecafd0b68614fff1", "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40"]
> exit
$ geth --networkid "10" --nodiscover --datadir . --rpc  --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal" --targetgaslimit "20000000" console 2>> ./error.log --unlock 0x7001a118c14a5b271c17994addaef9b7f858a464,0xbd45a56933e55e1c926a49b2ecafd0b68614fff1,0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40 --password ./password.txt 
> eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(5, "ether")})
"0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a"

# トランザクションの確認(ブロックに取り込まれる前)
> eth.getTransaction("0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a")
{
  blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
  blockNumber: null,
  from: "0x7001a118c14a5b271c17994addaef9b7f858a464",
  gas: 90000,
  gasPrice: 18000000000,
  hash: "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a",
  input: "0x",
  nonce: 1,
  r: "0xca56aebbfe3a32f196725f11b1a69e6453b3e8d8a154f4b5335ed3f9bcaf62fc",
  s: "0x41151bd28c1316cb452b484863977d90f452524e9a2aefc455c18d9584755668",
  to: "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40",
  transactionIndex: 0,
  v: "0x65",
  value: 5000000000000000000
}

# トランザクションの確認(ブロックに取り込んだ後)
> eth.getTransaction("0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a")
{
  blockHash: "0x9554fc46f244bd102cb0e54555d53489419a8219b6a23268f07740736c55cbb3",
  blockNumber: 186,
  from: "0x7001a118c14a5b271c17994addaef9b7f858a464",
  gas: 90000,
  gasPrice: 18000000000,
  hash: "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a",
  input: "0x",
  nonce: 1,
  r: "0xca56aebbfe3a32f196725f11b1a69e6453b3e8d8a154f4b5335ed3f9bcaf62fc",
  s: "0x41151bd28c1316cb452b484863977d90f452524e9a2aefc455c18d9584755668",
  to: "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40",
  transactionIndex: 1,
  v: "0x65",
  value: 5000000000000000000
}

# etherの保有量をブロックごとに確認
> web3.fromWei(eth.getBalance(eth.accounts[2], 186), "ether")
10
> web3.fromWei(eth.getBalance(eth.accounts[2], 185), "ether")
0

# トランザクションレシートの確認
> eth.getTransactionReceipt("0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a")
{
  blockHash: "0x9554fc46f244bd102cb0e54555d53489419a8219b6a23268f07740736c55cbb3",
  blockNumber: 186,
  contractAddress: null,
  cumulativeGasUsed: 42000,
  from: "0x7001a118c14a5b271c17994addaef9b7f858a464",
  gasUsed: 21000,
  logs: [],
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  root: "0xecd153e9e9d8e1612d44b6ceba19e3483c47eff9a9255e3848b4f105f9e04921",
  to: "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40",
  transactionHash: "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a",
  transactionIndex: 1
}

# ブロック情報確認
> eth.getBlock(227)
{
  difficulty: 138849, // ブロック生成難易度
  extraData: "0xd883010801846765746887676f312e392e348664617277696e", 
  gasLimit: 10468907, // このブロックで使用できるGasの最大サイズ
  gasUsed: 0, // このブロックで使われたGasの使用量
  hash: "0xce98dabd49c32d07232b067c952be4d83680dc0a79cd5a063071b004ba6beb25", // ブロックを表すハッシュ値
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x7001a118c14a5b271c17994addaef9b7f858a464", // マイニング報酬を受け取るアカウント
  mixHash: "0xe4cdb381c0a765d264289e2728501981cd13d5f15c8585a144843bc5248e4d0c", // このブロックで十分な量の計算が実行されたことをnonceと組み合わせて証明するハッシュ値
  nonce: "0x3111f06e186e3c87", // mixHashと組み合わせて、このブロックで十分な量の計算が実行されたことを表す
  number: 227, // 現在のブロック番号
  parentHash: "0x92fda73321e94da614a4c68675aa02ffac31b6db429e1e80e723c9ad79102762", // 親ブロックのヘッダのハッシュ値
  receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", // 現在のブロックのUncleブロック配列のハッシュ
  size: 537,
  stateRoot: "0xf157c32eeea56b3616c85a37ea9accb00fa20755e80401abf779dadcf289addf",
  timestamp: 1528646264,
  totalDifficulty: 31097657, // このブロック以前の難易度の総和
  transactions: [], // ブロックに取り込まれているトランザクションのハッシュが配列で入っている
  transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", // ブロックに入っているトランザクションを含んだ木構造のルートノードのハッシュ
  uncles: [] // Uncleブロックのハッシュ配列
}

``` 