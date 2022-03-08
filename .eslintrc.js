module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-console': 'error',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
	},
};
