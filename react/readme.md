#react

react简单实践，涉及到的关键词

* react
* react-router
* webpack
* cssmodules
* sass
* dev tools
* commands
* ...

##todo

* images
* fonts
* postcss
* ugly
* server
* ...

##玩法

$ npm install webpack -g
$ npm install babel-node@5.8 -g
$ npm install --registry=https://registry.npm.taobao.org
$ npm run dev

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

2、hot-reloader的问题

  Hot-reloader与ExtractTextPlugin貌似天生不兼容，在dev的时候，不要用ExtractTextPlugin

3、关于jsx的问题

  用es5的语法，可以
  React.createClass({
    onTagClick: function() {
      this.state.test = 1;
    },
    render: function() {
      return (
        <a onClick={onTagClick}>test{this.state.test}</a>
      );
    }
  });

  但是用es6的语法，事件一定得bind(this)，不然在onTageClick函数体里拿不到this对象。例如
  class Test extends React.Component{
    onTagClick(){
      this.state.test = 1;
    },
    render(){
      return (
        <a onClick={onTagClick.bind(this)}>test{this.state.test}</a>
      )
    }
  }
