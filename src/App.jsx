import React, {Component} from 'react';

import products from '../public/products';

import ProductsList from './components/ProductsList/ProductsList.jsx';
import Cart from './components/Cart/Cart.jsx';

import './index.scss';

class App extends Component {
  state = {
    products,
    cart: [],
  };

  componentDidMount() {
    const cartData = this.getCartDataFromLocalStorage();
    this.setState({cart: cartData});
  }

  handleAddToCart = (id) => {
    const productToAdd = this.state.products.find((product) => product.id === id);

    this.setState(
      (prevState) => ({
        cart: [...prevState.cart, productToAdd],
      }),
      () => {
        this.saveCartDataToLocalStorage(this.state.cart);
      },
    );
  };

  handleClearCart = () => {
    this.setState({cart: []}, () => {
      this.saveCartDataToLocalStorage(this.state.cart);
    });
  };

  saveCartDataToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  getCartDataFromLocalStorage = () => {
    try {
      const cartData = localStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error while parsing cart data from localStorage:', error);
      return [];
    }
  };

  render() {
    const {products, cart} = this.state;

    return (
      <div className="container">
        <h1>Demo Store</h1>
        <div className="row">
          <div className="col-md-8">
            <ProductsList
              products={products}
              addToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4">
            <Cart
              products={cart}
              clearCart={this.handleClearCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
