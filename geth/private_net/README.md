# Geth準備
```bash
# genesisブロックの初期化
$ geth --datadir ../private_net init ./genesis.json

$ geth --networkid "10" --nodiscover --datadir "../private_net" \
  --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal" \
  --targetgaslimit "20000000" console 2>> ../private_net/error.log
```

# コマンド
## アカウント
```
# アカウント作成
> personal.newAccount("pass")
"0xc4a63ca9a335f9cbea33d03436c5e4eba2bbb7d4"

# アカウント確認
> eth.accounts
["0xc4a63ca9a335f9cbea33d03436c5e4eba2bbb7d4"]

# コインベースアカウントの確認
# つまりこのアカウントにマイニング報酬が入る
> eth.coinbase
"0xc4a63ca9a335f9cbea33d03436c5e4eba2bbb7d4"
```

## ブロック
```
> eth.getBlock(0)
```

## マイニング
```
> miner.start(1)
null
> eth.mining
true

```
