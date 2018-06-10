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

``` 