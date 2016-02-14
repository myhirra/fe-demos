import React , { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { add, minus } from '../../actions'

class Product extends Component{

  constructor(props) {
    super(props);
  }

  onAddClicked() {
    this.props.dispatch(add());
  }

  onMinusClicked() {
    if(this.props.number == 1){
      if(!confirm('全部删除？')){
        return false;
      }
    }

    this.props.dispatch(minus());
  }

  render() {
    return (
      <div>
        <div>
          {this.props.id}
        </div>
        <div>
          价格：{this.props.price * this.props.number}
        </div>
        <div>
          <button
            onClick={this.onAddClicked.bind(this)}>
            +
          </button>
          <span>{this.props.number}</span>
          <button
            onClick={this.onMinusClicked.bind(this)}
            disabled={this.props.number>0?'':'disabled'}>
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
  id:'Atest1',
  number:1,
  price:100
}

function select(state) {
  return {
    number:state.number
  };
}

export default connect(select)(Product)
