import React, {Component} from 'react';

import products from '../../../public/products';

class Product extends Component {
  state = {
    products,
  };

  handleAddToCart = (id) => {};

  render() {
    const {products} = this.state;

    return (
      <div>
        <h2>Products</h2>
        <ul className="list-group">
          {products.map((product) => (
            <li
              key={product.id}
              className="list-group-item"
            >
              <div className="product-info">
                <img
                  src="images/image-1.webp"
                  alt={product.name}
                />
                <span>
                  {product.name} - {product.price} грн
                </span>
              </div>
              <button
                onClick={() => this.handleAddToCart(product.id)}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Product;
