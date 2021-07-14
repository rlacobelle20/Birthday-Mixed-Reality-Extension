var shell = require('shelljs');
var forEachRun = require('./for-each-run');

forEachRun((sampleDir) => {
	var cmd = `pushd ${sampleDir} && npm run build && popd`;
	console.log(cmd);
	shell.exec(cmd);
});