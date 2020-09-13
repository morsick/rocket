const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
	entry: './index.js',
	module: {
		rules: [
			{ test: /\.svg$/, use: 'svg-inline-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new SourceMapDevToolPlugin({
			filename: "[file].map"
		}),
	],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}