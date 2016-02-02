import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';

const config = {
	entry:[
		'./app/index.jsx'
	],
	output: {
		path: `${__dirname}/assets/`,
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx','.scss'],
		alias: {
		}
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/,loaders: ['react-hot','babel'],include: `${__dirname}/app/`,exclude: /node_modules/ },
			{ test: /\.(scss|css)$/,exclude: /node_modules/,loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader')},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	devtool: false,
	cache: false,
	plugins: [
		 new ExtractTextPlugin("styles.css"),
		 new webpack.HotModuleReplacementPlugin(),
		 new webpack.optimize.UglifyJsPlugin()
	]
};

export default config;
