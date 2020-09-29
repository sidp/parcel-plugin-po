const { Asset } = require('parcel-bundler');
const serializeObject = require('parcel-bundler/src/utils/serializeObject')
const po2json = require('po2json');

class PoAsset extends Asset {
	type = 'js';

	async parse(code) {
		// po2json doesn't have a config file, so let's skip this for now.
		// const config = await this.getConfig([], { packageKey: 'po' });
		return po2json.parse(code, {
			format: 'mf',
		});
	}

	async generate() {
		return serializeObject(this.ast);
	}
}

module.exports = PoAsset;
