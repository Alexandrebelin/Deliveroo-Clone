const Cart = ({ addCart, subCart, cart }) => {
  const emptyCart = cart.length === 0;
  const delivery = 2.5;

  let subTotal = 0;

  cart.forEach((cartItem) => {
    subTotal += cartItem.price * cartItem.amount;
  });

  const total = subTotal + delivery;

  return (
    <div className="Cart">
      <div className="Cart--card">
        <button
          className={"Cart--validate" + (emptyCart ? " Cart--disabled" : "")}
        >
          Valider mon panier
        </button>

        {emptyCart ? (
          <div className="Cart--empty">Votre panier est vide</div>
        ) : (
          <div>
            <div className="Cart--items">
              {cart.map((elem) => {
                return (
                  <div
                    key={elem.id}
                    className="Cart--line"
                    data-testid="cart-line"
                  >
                    <div className="Cart--counter">
                      <span
                        onClick={() => subCart(elem.id)}
                        data-testid="minus-button"
                        className="button-moins "
                      >
                        -
                      </span>
                      <span data-testid="item-quantity">{elem.amount}</span>
                      <span
                        onClick={() => addCart(elem.id)}
                        data-testid="plus-button"
                        className="button-plus "
                      >
                        +
                      </span>
                    </div>
                    <span className="Cart--item-name">{elem.title}</span>
                    <span className="Cart--amount">
                      {Number(elem.price).toFixed(2).replace(".", ",") + " €"}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="Cart--results">
              <div className="Cart--result-line">
                <span className="Cart--result-name">Sous-total</span>
                <span className="Cart--amount">
                  {subTotal.toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <div className="Cart--result-line">
                <span className="Cart--result-name">Frais de livraison</span>
                <span>{delivery.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>
            <div className="Cart--total">
              <span className="Cart--result-name">Total</span>
              <span className="Cart--amount" data-testid="cart-amount">
                {total.toFixed(2).replace(".", ",")} €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
