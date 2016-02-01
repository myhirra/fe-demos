import webpack from 'webpack';
import minimist from 'minimist';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const config = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
		'./app/index.jsx'
	],
	output: {
		path: `${__dirname}/assets/`,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx','.css'],
		alias: {
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot','babel'],
				include: `${__dirname}/app/`,
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]','sass-loader')
			}
		]
	},
	devtool: DEBUG ? 'source-map' : false,
	cache: DEBUG,
	plugins: [
		 new ExtractTextPlugin("styles.css"),
		 new webpack.HotModuleReplacementPlugin(),
	]
};

!DEBUG && config.plugins.push(new webpack.optimize.UglifyJsPlugin());

export default config;
