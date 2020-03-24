const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledProjhub = require("../ethereum/build/Projhub.json");

let accounts;
let projhub;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  projhub = await new web3.eth.Contract(JSON.parse(compiledProjhub.interface))
    .deploy({ data: compiledProjhub.bytecode })
    .send({ from: accounts[0], gas: "2000000" });
});

describe("Testing Manager", () => {
  it("shows manager", async () => {
    let manager;
    manager = await projhub.methods.manager().call();
    console.log(manager);
    assert(manager == accounts[0]);
  });
});

describe("Testing operations", () => {
  it("create and get user", async () => {
    await projhub.methods
      .createUser("Hrishi", "bawane.hrishi18@gmail.com")
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    await projhub.methods
      .createUser("Zion", "bawane.zion@gmail.com")
      .send({
        from: accounts[1],
        gas: "1000000"
      });

    const userDetails = await projhub.methods
      .getUserDetails(accounts[1])
      .call();
    console.log(userDetails);
    assert(userDetails[1] == accounts[1]);
  });

  it("create proj", async () => {
    await projhub.methods
      .createUser("Hrishi", "bawane.hrishi18@gmail.com")
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    await projhub.methods
      .createProject(0, "First", ["Hello", "World"], "20/3")
      .send({ from: accounts[0], gas: "1000000" });

    await projhub.methods
      .createProject(0, "Second", ["Hello", "India"], "20/3")
      .send({ from: accounts[0], gas: "1000000" });

    const user = await projhub.methods.users(0).call();
    const proj1 = await projhub.methods.getProjectDetails(accounts[0], 0).call();
    const proj2 = await projhub.methods.getProjectDetails(accounts[0], 1).call();
    console.log(proj1);
    console.log(proj2);
    assert(user.projCount == 2);
  });
});

// https://gitchain-nyiazgpkw.now.sh/