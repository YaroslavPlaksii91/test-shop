import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const {products, clearCart} = this.props;
    const totalCost = products.reduce((sum, product) => sum + product.price, 0);

    return (
      <div>
        <h2>Cart</h2>
        {products.length === 0 ? (
          <p>Кошик пустий (0 грн)</p>
        ) : (
          <div>
            <ul className="list-group">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item"
                >
                  <h3>{product.name}</h3>
                  <p>{product.price} грн</p>
                </li>
              ))}
            </ul>
            <p>Загальна вартість: {totalCost} грн</p>
            <button
              onClick={clearCart}
              className="btn btn-danger"
            >
              Очистити
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
