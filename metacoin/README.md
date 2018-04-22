```bash
$ truffle unbox metacoin
$ truffle develop
truffle(develop)> compile
truffle(develop)> migrate
truffle(develop)> m = MetaCoin.at("0xf25186b5081ff5ce73482ad761db0eb0d25abfbf")
m.get

# init時の状態
truffle(develop)> m.getBalance(web3.eth.accounts[0])
{ [String: '10000'] s: 1, e: 4, c: [ 10000 ] }
truffle(develop)> m.getBalance(web3.eth.accounts[1])
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }

truffle(develop)> m.sendCoin(web3.eth.accounts[1], 1000)

# 送金後の状態
truffle(develop)> m.getBalance(web3.eth.accounts[0])
{ [String: '9000'] s: 1, e: 3, c: [ 9000 ] }
truffle(develop)> m.getBalance(web3.eth.accounts[1])
{ [String: '1000'] s: 1, e: 3, c: [ 1000 ] }
```