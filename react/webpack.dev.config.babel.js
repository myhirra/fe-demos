import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const config = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
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
			{ test: /\.(scss|css)$/,exclude: /node_modules/,loaders: ['style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader']},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	devtool: 'source-map',
	cache: true,
	plugins: [
		 new webpack.HotModuleReplacementPlugin(),
	]
};

new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});

export default config;
