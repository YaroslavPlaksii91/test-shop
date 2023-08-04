import React, {Component} from 'react';

import products from '../public/products';

import ProductsList from './components/ProductsList/ProductsList.js';
import Cart from './components/Cart/Cart.js';

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
        cart: [...prevState.cart, {...productToAdd, isAdded: true}],
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
        <h1 className="h1 text-center mb-4">Demo Store</h1>
        <div className="row">
          <div className="col-md-8">
            <ProductsList
              products={products}
              addToCart={this.handleAddToCart}
              cart={cart}
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
