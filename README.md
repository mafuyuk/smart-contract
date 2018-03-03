# smart-contract


```bash
# 初期化
$ geth init ./private_net/genesis.json --datadir ./private_net

# JavaScriptコンソール
$ geth console --networkid 33 --nodiscover --datadir ./private_net --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal" --targetgaslimit "20000000" 2>> ./private_net/error.log
```