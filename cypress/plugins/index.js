const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile (file) {
	const configPath = path.resolve('cypress', 'config', `${file}.json`);
	return fs.readJson(configPath);
}

module.exports = (on, config) => {
	// const file = config.env.configFile || 'local';
	// return getConfigurationByFile(file)
	// 	.then((conf) => {
	// 		config.env = conf.env;
	// 		console.log(config.env);
	// 		return config;
	// 	});
};