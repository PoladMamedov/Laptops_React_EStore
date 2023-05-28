import { useSelector, useDispatch } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/slices/favItemsSlice";
import { openModal } from "../../redux/slices/modalSlice";
import { setSelectedItem } from "../../redux/slices/selectedItemSlice";
import { addToCart, decreaseAmount } from "../../redux/slices/cartItemsSlice";

export function ItemListCard({ favorite, inCart, item: { id, name, price, imgPath, article, color, amount } }) {
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
      <li id={id} className="card flex-row p-3 w-100" style={{ height: "180px" }}>
        <div className="d-flex justify-content-center" style={{ width: "200px" }}>
          <img width={220} src={imgPath} style={{ objectFit: "contain" }} alt="item-img" />
        </div>
        <div className="d-flex flex-column justify-content-start ms-4" style={{minWidth: "160px"}}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">{"Color: " + color}</p>
          <p className="card-text">{"Article: " + article}</p>
          <p className="card-text fw-bold">{price + " UAH"}</p>
        </div>
        {inCart ? (
          <div className="d-flex flex-column ms-auto justify-content-between align-items-end w-25" style={{minWidth: "100px"}}>
            <button onClick={confirmRemove} className="btn p-0 fw-bold fs-4 border-0">
              &#10005;
            </button>
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
              <input
                disabled
                type="text"
                className="form-control text-center border-start-0 border-end-0 border-secondary p-0"
                placeholder={amount}
              />
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
          </div>
        ) : (
          <div className="d-flex justify-content-between flex-column align-items-end ms-auto" style={{minWidth: "100px"}}>
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
      </li>
    </>
  );
}
