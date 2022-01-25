const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "dirt key runway crucial journey ski hunt expect gown salute supreme fence",
  "https://rinkeby.infura.io/v3/e3f8de208c8846f6a7bbcc451c493b6f"
);

const web3 = new Web3(provider);
//provider is the communication layer with the actual blockchain
/*providers are of 3 types:
they're either of websocket, http or icp type
*/

const deployy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract is deployed to ", result.options.address);
  provider.engine.stop();
};
deployy();
