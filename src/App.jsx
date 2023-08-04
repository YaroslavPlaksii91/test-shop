import React, {Component} from 'react';
import Product from './components/Product/Product.jsx';
import Cart from './components/Cart/Cart.jsx';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Demo Store</h1>
        <div className="row">
          <div className="col-md-8">
            <Product />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
