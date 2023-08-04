import React, {Component} from 'react';

class Product extends Component {
  render() {
    const {product, addToCart} = this.props;

    return (
      <article>
        <div className="product-info">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button
          onClick={() => addToCart(product.id)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </article>
    );
  }
}

export default Product;
