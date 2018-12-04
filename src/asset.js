const { Asset } = require('parcel-bundler');
const po2json = require('po2json');

class PoAsset extends Asset {
	constructor(name, pkg, options) {
		super(name, pkg, options);
		this.type = 'json';
	}

	async generate() {
		// po2json doesn't have a config file, so let's skip this for now.
		// const config = await this.getConfig([], { packageKey: 'po' });

		const parsed = po2json.parse(this.contents, {
			format: 'mf',
		});

		return [
			{
				type: 'json',
				value: parsed,
			},
			{
				type: 'js',
				value: `module.exports = ${JSON.stringify(parsed)}`,
				sourceMap: undefined,
			},
		];
	}
}

module.exports = PoAsset;
