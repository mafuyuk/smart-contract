```bash
# genesisブロックの初期化
$ geth --datadir ../private_net init ./genesis.json

$ geth --networkid "15" --nodiscover --datadir "../private_net" console 2>> ../private_net/geth_err.log
```