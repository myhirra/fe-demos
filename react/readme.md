#react

react简单实践，涉及到的关键词

* react
* react-router
* webpack
* cssmodules
* sass
* dev tools
* ...

##todo

* images
* fonts
* postcss
* ugly
* commands
* server
* ...

##构建过程中碰到的坑（扫盲）

1、cssmodules与sass结合使用

  以前的做法：

    {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]','sass-loader')
    }

  正确的做法：

    {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader')
    }
