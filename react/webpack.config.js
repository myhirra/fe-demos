import webpack from 'webpack';
import minimist from 'minimist';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const config = {
	entry: {
		app: './app/index.jsx'
	},
	output: {
		path: `${__dirname}/assets/`,
		filename: 'bundle.js'
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
				loader: 'babel?stage=0'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader')
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
      {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
      {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
      {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	devtool: DEBUG ? 'source-map' : false,
	plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
	cache: DEBUG,
	plugins: [
		 new ExtractTextPlugin("styles.css")
	]
};

!DEBUG && config.plugins.push(new webpack.optimize.UglifyJsPlugin());

export default config;
