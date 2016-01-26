'use strict';
import React from 'react';
import Header from './components/header.jsx';
import AnimateCss from 'animate.css/animate.css';

React.render(
  <div>
    <Header></Header>

    <div className="content">
      <h1 className="animated flipInY">
        我是首页
      </h1>
    </div>
  </div>
,document.body);
