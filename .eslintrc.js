module.exports = {
	env: {
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:chai-friendly/recommended',
		'airbnb',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'chai-friendly'],
	rules: {
		'prettier/prettier': 'error',
		"import/no-unresolved": [
			2,
			{ "caseSensitive": false }
		 ],
		'no-unused-expressions': 0,
		'react/jsx-indent-props': [4, 'tab'],
		'chai-friendly/no-unused-expressions': 2,
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': 0,
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		camelcase: 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		'newline-after-var': [2, 'always'],
		'func-names': ['error', 'never'],
		code: 0,
		'max-len': ['error', { ignoreStrings: true }],
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'no-multiple-empty-lines': 'off',
		'no-trailing-spaces': ['off', { ignoreComments: 'on' }],
		'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
	},
};
