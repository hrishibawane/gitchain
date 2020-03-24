import web3 from "./web3";
import Blockhub from "./build/Projhub.json";

const instance = new web3.eth.Contract(
    JSON.parse(Blockhub.interface),
    "0x0891Bb43cC6B87E954359Cd7250c1bc1Cb3a43B5"
);

export default instance;