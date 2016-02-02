import React from 'react'
import {Link} from 'react-router'

import Slide from '../slide/slide.jsx'

import styles from './app.scss';

class App extends React.Component{
  render() {
    return (
      <div>
        <Slide></Slide>
        <div className={styles.content}>
          <h1>App</h1>
        </div>
      </div>
    )
  }
}

export default App
