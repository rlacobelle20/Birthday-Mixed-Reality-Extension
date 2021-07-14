var shell = require('shelljs');
var forEachSample = require('./for-each-run');

forEachRun((sampleDir) => {
	var cmd = `pushd ${sampleDir} && npm install && popd`;
	console.log(cmd);
	shell.exec(cmd);
});