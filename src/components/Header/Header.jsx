import { FavoritesBtn } from "../FavoritesBtn/FavoritesBtn";
import { CartBtn } from "../CartBtn/CartBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LayoutChangeBtns } from "../LayoutChangeBtns/LayoutChangeBtns";

export function Header() {
  const favItems = useSelector((state) => state.favItems);
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemsLength = cartItems.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <>
      <nav style={{ zIndex: 3 }} className="navbar bg-light border-bottom sticky-top">
        <div className="container">
          <Link className="btn btn-light fs-4 pb-2" to={"/"}>
            Laptops
          </Link>
          <div className="d-flex gap-4 align-items-center">
            <LayoutChangeBtns />
            <Link to={"/favorites"}>
              <FavoritesBtn favItemsCount={favItems.length} />
            </Link>
            <Link to={"/cart"}>
              <CartBtn cartItemsCount={cartItemsLength} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
