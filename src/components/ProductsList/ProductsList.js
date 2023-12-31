import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product.js';

class ProductsList extends Component {
  render() {
    const {products, addToCart, cart} = this.props;

    return (
      <section>
        <h2 className="h2 mb-4 text-center">Products</h2>
        <ul className="list-group products-list">
          {products.map((product) => (
            <li
              key={product.id}
              className="products-item"
            >
              <Product
                product={product}
                addToCart={addToCart}
                cart={cart}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
