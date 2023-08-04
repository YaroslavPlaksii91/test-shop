import React, {Component} from 'react';

import Product from '../Product/Product.js';

class ProductsList extends Component {
  render() {
    const {products, addToCart} = this.props;

    return (
      <section>
        <h2>Products</h2>
        <ul className="list-group">
          {products.map((product) => (
            <li
              key={product.id}
              className="list-group-item"
            >
              <Product
                product={product}
                addToCart={addToCart}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ProductsList;
