import React from 'react'
import {Link} from 'react-router'

import styles from './app.scss';

class App extends React.Component{
  render() {
    return (
      <div className={styles.content}>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
