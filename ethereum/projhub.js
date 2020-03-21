import web3 from "./web3";
import Blockhub from "./build/Projhub.json";

const instance = new web3.eth.Contract(
    JSON.parse(Blockhub.interface),
    "0x91D9E016B8F4C4cD5c86a5AD2A9CCDf44Ba204E0"
);

export default instance;