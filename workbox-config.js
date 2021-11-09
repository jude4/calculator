module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};