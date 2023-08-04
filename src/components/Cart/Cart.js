import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const {products, clearCart} = this.props;
    const totalCost = products.reduce((sum, product) => sum + product.price, 0);

    return (
      <div className="text-center">
        <h2 className="h2 mb-4">Cart</h2>
        {products.length === 0 ? (
          <p>Cart id empty (0 UAH)</p>
        ) : (
          <div>
            <ul className="list-group mb-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="products-item cart-item"
                >
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price} UAH</p>
                </li>
              ))}
            </ul>
            <p className="cart-total mb-4">
              Total value: <span>{totalCost} UAH</span>
            </p>
            <button
              onClick={clearCart}
              className="btn btn-danger "
            >
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Cart;
