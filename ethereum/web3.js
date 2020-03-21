import Web3 from 'web3';

let web3;

// if on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and metamask present
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // we are on server OR metamask not present
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/1a4e018e1ef646ba9908209e489a9819'
    );
    web3 = new Web3(provider);
}

export default web3;