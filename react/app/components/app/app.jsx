import React from 'react'
import Slide from '../slide/slide.jsx'
import Product from '../product/product.jsx'

import styles from './app.scss';

class App extends React.Component{
  render() {
    return (
      <div>
        <div className={styles.slide}>
          <Slide></Slide>
        </div>
        <div className={styles.content}>
          <Product></Product>
        </div>
      </div>
    )
  }
}

export default App
