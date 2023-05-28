import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import { addToCart } from "../../redux/slices/cartItemsSlice";
import { removeFromCart } from "../../redux/slices/cartItemsSlice";

export function Modal() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem);
  const isRemoving = useSelector((state) => state.modal.isRemoving);
  const { name, price, imgPath } = selectedItem;
  return (
    <>
      <div
        data-testid="modal"
        className="d-flex flex-column text-center rounded p-4 pt-3 position-fixed top-50 start-50 translate-middle bg-light fs-4"
        style={{ zIndex: 11, width: "350px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="m-0 fs-5">{isRemoving ? `Removing this item from cart:` : `Adding this item to a cart:`}</p>
          <button data-testid="close-modal-btn" onClick={() => dispatch(closeModal())} className="btn p-0 fw-bold fs-4 border-0">
            &#10005;
          </button>
        </div>
        <p>{name}</p>
        <img src={imgPath} width={"100%"} alt="adding-item" />
        <p className="fw-bold mt-2">{price + " UAH"}</p>
        {isRemoving ? (
          <button
            onClick={() => {
              dispatch(removeFromCart(selectedItem));
              dispatch(closeModal());
            }}
            className="btn btn-danger w-100"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addToCart(selectedItem));
              dispatch(closeModal());
            }}
            className="btn btn-primary w-100"
          >
            Add
          </button>
        )}
      </div>
      <div data-testid="modal-bg" className="modalBg" onClick={() => dispatch(closeModal())}></div>
    </>
  );
}
