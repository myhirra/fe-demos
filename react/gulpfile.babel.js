import fs from 'fs';
import del from 'del';
import gulp from 'gulp';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import minimist from 'minimist';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import gulpLoadplugin from 'gulp-load-plugins';

import webpackConfig from './webpack.config';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const $ = gulpLoadplugin();

const webDist = 'assets';

let WATCH = false;

// Build all files, the default task
gulp.task('default', ['clean'], cb => {
  $.util.log('DEBUG: ', DEBUG ? chalk.red('ON') : chalk.green('OFF'));
  runSequence('web', 'clean-tmp', 'serve', 'watch' ,cb);
});

// Build-in server for developer
gulp.task('serve' , () => {
  browserSync({
    server:true,
    port: 1234,
    open:false
  });

  let reload = browserSync.reload;

  gulp.watch(`${webDist}/*.{css,js}`, reload);
});

// Watch files for changes
gulp.task('watch', cb => {
  WATCH = true;

  gulp.watch(['app/**/*.{js,jsx}'], ['web scripts']);
  gulp.watch(['css/**/*.{css,scss}'], ['web styles']);
});


// Clean output directory and temporary directory
gulp.task('clean', cb => del(['.tmp', webDist], {dot: true}, cb));
gulp.task('clean-tmp', cb => del(['.tmp'], {dot: true}, cb));

// Compile web
gulp.task('web', ['web scripts','common scripts','web styles']);

// Compile common scripts
gulp.task('common scripts',() => {
  gulp.src('common/js/**/*.js')
    .pipe($.concat('common.js'))
    .pipe(gulp.dest(`${webDist}/`));
})

// Compile web scripts by webpack
gulp.task('web scripts', callback => {
  const bundler = webpack(webpackConfig);
  let flag = true;

  let bundle = function (err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({
      hash: false,
      version: false,
      chunkModules: false
    }));
    flag && callback();
    flag = false;
  };

  if (WATCH) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

// Compile and automatically prefix stylesheets
gulp.task('web styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'chrome >= 40',
    'ie >= 10',
    'ff >= 30',
    'safari >= 7',
    'opera >= 23'
  ];

  function compile(src, dist) {
    return DEBUG ? src
      .pipe($.changed('.tmp/styles', {extension: '.css'}))
      .pipe($.sourcemaps.init())
      .pipe($.sass({ sourceComments: true, includePaths: ['css', 'node_modules'] }).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS.slice(0, 1)}))
      .pipe($.concat(dist))
      .pipe(gulp.dest('.tmp'))
      .pipe($.sourcemaps.write('.', {includeContent: true, sourceRoot: '/css'}))
      .pipe(gulp.dest(webDist))
      .pipe($.size({title: 'web styles'}))
      : src
      .pipe($.sass({ outputStyle: 'compressed', includePaths: ['css', 'node_modules'] }).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      .pipe($.concat(dist))
      .pipe(gulp.dest(webDist))
      .pipe($.size({title: 'web styles'}));
  }

  return merge(
    compile(gulp.src(['css/**/*.{css,scss}']), 'app.css')
  );
});
