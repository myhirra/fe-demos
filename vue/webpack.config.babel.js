import webpack from 'webpack';
import minimist from 'minimist';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const config = {
	entry: './app/index.js',
	output: {
		path:`${__dirname}/assets/`,
		filename:'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.vue?$/,
				loader: 'vue-loader'
			},{
					test: /\.js?$/,
					loader: 'babel?stage=0'
			},{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader','sass-loader')
			}]
	},
	devtool: DEBUG ? 'source-map' : false,
	plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
	cache: DEBUG,
	plugins: [
		 new ExtractTextPlugin("styles.css")
	]
};

DEBUG && new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  noInfo: false,
  historyApiFallback: true
}).listen(3000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});

!DEBUG && config.plugins.push(new webpack.optimize.UglifyJsPlugin());

export default config;
