import { useSelector, useDispatch } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/slices/favItemsSlice";
import { openModal } from "../../redux/slices/modalSlice";
import { setSelectedItem } from "../../redux/slices/selectedItemSlice";
import { addToCart, decreaseAmount } from "../../redux/slices/cartItemsSlice";

export function ItemCard({ favorite, inCart, item: { id, name, price, imgPath, article, color, amount } }) {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function favBtnClick(e, id) {
    if (favorite) {
      dispatch(removeFromFav(id));
    } else {
      const item = items.find((item) => item.id === id);
      dispatch(addToFav(item));
    }
  }

  function confirmRemove() {
    dispatch(setSelectedItem(items.find((item) => item.id === id)));
    dispatch(openModal(true));
  }

  return (
    <>
      <li id={id} className="card" style={{ width: "250px" }}>
        {inCart ? (
          <button onClick={confirmRemove} className="align-self-end btn p-0 me-3 mt-1 fw-bold fs-4 border-0">
            &#10005;
          </button>
        ) : null}
        <img src={imgPath} className="card-img-top p-3" alt="item-img" />
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">{"Color: " + color}</p>
          <p className="card-text">{"Article: " + article}</p>
          <p className="card-text fw-bold">{price + " UAH"}</p>
          {inCart ? (
            <div className="input-group">
              <button
                onClick={() => {
                  amount === 1 ? confirmRemove() : dispatch(decreaseAmount(id));
                }}
                className="btn btn-outline-secondary"
                type="button"
              >
                -
              </button>
              <input disabled type="text" className="form-control text-center border-start-0 border-end-0 border-secondary" placeholder={amount} />
              <button
                onClick={() => {
                  dispatch(addToCart(items.find((item) => item.id === id)));
                }}
                className="btn btn-outline-secondary"
                type="button"
              >
                +
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-between">
              <button onClick={(e) => favBtnClick(e, id)} className="btn border-0 p-0">
                <img width={25} height={25} src={favorite ? "./img/star-active.png" : "./img/star.png"} alt="star" />
              </button>
              <button
                onClick={() => {
                  dispatch(setSelectedItem(items.find((item) => item.id === id)));
                  dispatch(openModal());
                }}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
