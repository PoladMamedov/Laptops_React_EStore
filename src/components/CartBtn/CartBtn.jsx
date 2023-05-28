export function CartBtn(props) {
  return (
    <button data-testid="cart-btn" type="button" className="btn btn-light border-secondary position-relative pt-0">
      <img width={20} height={20} src="./img/shopping-cart.png" alt="cart" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.cartItemsCount}
      </span>
    </button>
  );
}