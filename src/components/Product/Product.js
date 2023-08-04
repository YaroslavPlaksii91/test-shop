import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const {product, addToCart} = this.props;

    return (
      <article className="card border-0">
        <div className="product-info">
          <img
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="card-img-top"
          />
        </div>
        <div className="card-body text-center">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text mb-2">{product.price}</p>
          <button
            onClick={() => addToCart(product.id)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </article>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
