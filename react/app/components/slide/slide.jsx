import React from 'react'
import {Link} from 'react-router'

import styles from './slide.scss';

class App extends React.Component{
  render() {
    return (
      <div id="slide" className={styles.slide}>
        <div className="right">right</div>
        <div>
          <ul>
            <li>Index</li>
            <li>Archive</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
