import React, {Component} from 'react';

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

export default Cart;
