const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
//everytime we import a web3 library we're gonna use upper-case
//because web3 uses a constructor

const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require("../compile");

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// //the mocha testing framework workks before each and every 'it' block is executed
// let car;
// //we're not using const because we'll reassign the value of car with every it-function call
// beforeEach(() => {
//   car = new Car();
//   //then a will be console logged before every "it" block
// });

// describe("Car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });
//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });

// beforeEach(() => {
//   //get a list of those unlocked accounts
//   //use one of those accounts to deploy the contract
//   web3.eth
//     .getAccounts()
//     //almost every function in the web3 library is asynchronous
//     //thus it returns a promise
//     .then((fetchedAccounts) => {
//       console.log(fetchedAccounts);
//     });
// });

let accounts;
let inbox;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  //get a list of all accounts
  //use one of those contracts to deplpy the smart contract

  //steps to deploy the contract in the network

  //these tasks are indeed asynchronous operations therefore they take some amount of time to complete
  //therefore we can use the await keyword

  inbox = new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      //data of the contract updation in the blockchain
      arguments: ["Hi there !"],
      //initial arguments, datatype should match that of the
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
