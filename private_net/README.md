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
  blockHash: "0x9554fc46f244bd102cb0e54555d53489419a8219b6a23268f07740736c55cbb3", // トランザクションがどのブロックに含まれているか表す
  blockNumber: 186, // トランザクションが何番目のブロックに含まれているか表す
  from: "0x7001a118c14a5b271c17994addaef9b7f858a464", // トランザクションを発行した送信者のアドレス
  gas: 90000, // 送信者が供給したGasの量
  gasPrice: 18000000000, // トランザクションで払っても良いと決めたGasの金額
  hash: "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a", // トランザクションを表すハッシュ
  input: "0x", // トランザクションに送信されたデータ
  nonce: 1, // トランザクション以前に送信者が送信したトランザクションの数
  r: "0xca56aebbfe3a32f196725f11b1a69e6453b3e8d8a154f4b5335ed3f9bcaf62fc", // 送信者のトランザクションを特定する署名を作るために使われる
  s: "0x41151bd28c1316cb452b484863977d90f452524e9a2aefc455c18d9584755668", // 送信者のトランザクションを特定する署名を作るために使われる
  to: "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40", // トランザクションを受け取った受診者のアドレス
  transactionIndex: 1, // トランザクションがブロックの何番目のトランザクションとして入っているかを表している
  v: "0x65", // 送信者のトランザクションを特定する署名を作るために使われる
  value: 5000000000000000000 // 送信者から受信者へ送る量。単位はwei
}

# etherの保有量をブロックごとに確認
> web3.fromWei(eth.getBalance(eth.accounts[2], 186), "ether")
10
> web3.fromWei(eth.getBalance(eth.accounts[2], 185), "ether")
0

# トランザクションレシートの確認
> eth.getTransactionReceipt("0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a")
{
  blockHash: "0x9554fc46f244bd102cb0e54555d53489419a8219b6a23268f07740736c55cbb3", // トランザクションがどのブロックに入っているか表す
  blockNumber: 186, // トランザクションが何番目のブロックに入っているか表す
  contractAddress: null, // コントラクトを作成するトランザクションの場合は、コントラクトのアドレスが入る
  cumulativeGasUsed: 42000, // トランザクション全体で使われたGasの使用量、例えば、他の処理もフックして実行された場合はそのGas使用量も合算して計算される
  from: "0x7001a118c14a5b271c17994addaef9b7f858a464", // トランザクションを発行した送信者のアドレス
  gasUsed: 21000, // トランザクションで使われたGasの使用量
  logs: [], // トランザクションで生成されたログ
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  root: "0xecd153e9e9d8e1612d44b6ceba19e3483c47eff9a9255e3848b4f105f9e04921", // トランザクションがState treeを変化させた後のState rootの値
  to: "0xc8e2f62ed9aeef4385974e646d0b281b08ce8e40",// トランザクションを受け取った受信者のアドレス
  transactionHash: "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a", // トランザクションハッシュ
  transactionIndex: 1 // トランザクションがブロックの何番目のトランザクションとして入っているかを表す
}

# ブロック情報確認
> eth.getBlock(186)
{
  difficulty: 136119, // ブロック生成難易度
  extraData: "0xd883010801846765746887676f312e392e348664617277696e",
  gasLimit: 10058281, // このブロックで使用できるGasの最大サイズ
  gasUsed: 42000, // このブロックで使われたGasの使用量
  hash: "0x9554fc46f244bd102cb0e54555d53489419a8219b6a23268f07740736c55cbb3",  // ブロックを表すハッシュ値
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x7001a118c14a5b271c17994addaef9b7f858a464", // マイニング報酬を受け取るアカウント
  mixHash: "0x8426f30d504235ed1d133132a61281c752994aad25fdfe555b8b606ed5b49a81", // このブロックで十分な量の計算が実行されたことをnonceと組み合わせて証明するハッシュ値
  nonce: "0x75be42109c5b9d9e", // mixHashと組み合わせて、このブロックで十分な量の計算が実行されたことを表す
  number: 186, // 現在のブロック番号
  parentHash: "0xe4955453fd4e144ea23bf472e7c749d0a778ae7b0f5c5d2c5803a6e67f21b867", // 親ブロックのヘッダのハッシュ値
  receiptsRoot: "0x3013ee3765c839a2771425335336854f1a9a3d6f56fed4851095c6a198d681ca",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", // 現在のブロックのUncleブロック配列のハッシュ
  size: 762,
  stateRoot: "0xb94925ca22517d46b1fd82f1b146993f41814b6eb55068e565fb18eb7711e9ba",
  timestamp: 1528646177,
  totalDifficulty: 25459652, // このブロック以前の難易度の総和
  transactions: ["0x9ee1982a54bf150715cfaf17db1572fdefe2165d903c1e62a7f316cd08c449b2", "0x406bf531a717bfc03c295d94d91e96cb8bd8deea6c06eaa3008feb54da29db9a"], // ブロックに取り込まれているトランザクションのハッシュが配列で入っている
  transactionsRoot: "0xaf2b54530c5092c8f54c2d9815d01aafe296c6e9f5f8faddcacbdd7908de7d8f", // ブロックに入っているトランザクションを含んだ木構造のルートノードのハッシュ
  uncles: []
}

``` 