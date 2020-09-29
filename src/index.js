module.exports = function(bundler) {
	bundler.addAssetType('po', require.resolve('./asset.js'));
}
