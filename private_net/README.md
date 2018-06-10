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

``` 