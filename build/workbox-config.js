module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};