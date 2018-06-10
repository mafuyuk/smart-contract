```
# Gethの初期化
$ geth --datadir . init ./genesis.json

# Gethの起動
$ geth --networkid "10" --nodiscover --datadir . --rpc  --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal" --targetgaslimit "20000000" console 2>> ./error.log
 ``` 