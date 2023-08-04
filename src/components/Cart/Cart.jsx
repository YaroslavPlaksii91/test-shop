import React, {Component} from 'react';

class Cart extends Component {
  state = {
    cartItems: [],
  };

  handleClearCart = () => {
    // Логіка очищення кошика
  };

  render() {
    const {cartItems} = this.state;
    const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
      <div>
        <h2>Кошик</h2>
        {cartItems.length === 0 ? (
          <p>Кошик пустий (0 грн)</p>
        ) : (
          <div>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item"
                >
                  <span>
                    {item.name} - {item.price} грн
                  </span>
                </li>
              ))}
            </ul>
            <p>Загальна вартість: {totalCost} грн</p>
            <button
              onClick={this.handleClearCart}
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

export default Cart;
