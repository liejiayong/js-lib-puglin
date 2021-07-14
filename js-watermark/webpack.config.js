const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
	entry: {
		watermark: './lib/watermark.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'WaterMark',
		libraryTarget: 'umd'
	},
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					warnings: false,
					// parse: {},
					// compress: {},
					// output: null,
					// toplevel: false,
					// nameCache: null,
					// ie8: false,
					// keep_fnames: false
				}
			})
		]
	}
}

module.exports = config
