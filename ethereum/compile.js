const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const projhubPath = path.resolve(__dirname, 'contracts', 'Projhub.sol');
const source = fs.readFileSync(projhubPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
console.log(output);

for (let contract in output) {
    let name = contract.replace(':', '');
    fs.outputJSONSync(
        path.resolve(buildPath, name + '.json'),
        output[contract]
    );
}