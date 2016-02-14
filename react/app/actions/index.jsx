import product from '../api/product.js'

export function getProduct() {
  return dispatch => {
    product.getProduct(products => {
      dispatch(product)
    })
  }
}
