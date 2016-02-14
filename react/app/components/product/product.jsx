import React , { Component, PropTypes } from 'react'

class Product extends Component{

  constructor(props) {
    super(props);
    this.state = props;
  }

  onAddClicked() {
    store.dispatch({ type: 'ADD' });
  }

  onMinusClicked() {
    if(this.state.number == 1){
      if(!confirm('全部删除？')){
        return false;
      }
    }

    store.dispatch({ type: 'MINUS' });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.id}
        </div>
        <div>
          价格：{this.state.price * this.state.number}
        </div>
        <div>
          <button
            onClick={this.onAddClicked.bind(this)}>
            +
          </button>
          <span>{this.state.number}</span>
          <button
            onClick={this.onMinusClicked.bind(this)}
            disabled={this.state.number>0?'':'disabled'}>
            -
          </button>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
  price: PropTypes.number
}

Product.defaultProps = {
  id: 'A1001',
  number: 1,
  price: 100
}

export default Product
