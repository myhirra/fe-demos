import _product from './product.json'

const TIMEOUT = 100;

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_product), timeout || TIMEOUT)
  }
}
