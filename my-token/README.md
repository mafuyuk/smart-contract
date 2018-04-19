# 環境準備
```bash
## truffle
$ truffle init

## yarn
$ yarn init
$ yarn add zeppelin-solidity truffle-hdwallet-provider
```

# テストネットにデプロイ
```
# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# Ethereum ブロックチェーンのエミュレータの起動
$ truffle develop

# マイグレーション
truffle(develop)> migrate
or
$ truffle migrate --network development
```

# Ropstenネットにデプロイ
```
# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# マイグレーション
$ truffle migrate --network ropsten
```
