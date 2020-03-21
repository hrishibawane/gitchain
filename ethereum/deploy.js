const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledProjhub = require("./build/Projhub.json");

const provider = new HDWalletProvider(
  "million taste trophy quantum sand cheese response zero casino reflect friend assist",
  "https://rinkeby.infura.io/v3/1a4e018e1ef646ba9908209e489a9819"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accs = await web3.eth.getAccounts();
  console.log("Deploying from account", accs[0]);

  try {
    const result = await new web3.eth.Contract(JSON.parse(compiledProjhub.interface))
      .deploy({ data: compiledProjhub.bytecode })
      .send({ gas: "2000000", from: accs[0] });

    console.log("Contract deployed to", result.options.address);

  } catch(err) {
    console.log(err.message);
  }

};

deploy();
