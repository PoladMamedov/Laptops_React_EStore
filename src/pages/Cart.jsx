import { ItemList } from "../components/ItemsList/ItemsList";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";
import { useSelector } from "react-redux";
import { useLayout } from "../context/LayoutContext";

export function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const isListlayout = useLayout();
  const containerClasses = isListlayout
    ? "d-flex align-items-center align-items-lg-start flex-column flex-lg-row justify-content-between gap-3"
    : "d-flex align-items-center align-items-sm-start flex-column flex-sm-row justify-content-between gap-3";
  return (
    <>
      <h3 className="text-center pt-3 pb-2">Your cart:</h3>
      {cartItems.length === 0 ? <p className="w-100 text-center fs-4">Empty...</p> : null}
      <div className={containerClasses}>
        <ItemList isCart={true} />
        {cartItems.length !== 0 && <CheckoutForm />}
      </div>
    </>
  );
}
