import { ItemCard } from "../ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { useLayout } from "../../context/LayoutContext";
import { ItemListCard } from "../ItemCard/itemListCard";

export function ItemList({ isFav, isCart }) {
  const items = useSelector((state) => state.items);
  const favItems = useSelector((state) => state.favItems);
  const cartItems = useSelector((state) => state.cartItems);
  const isListlayout = useLayout();

  return (
    <>
      <ul className="d-flex justify-content-center mt-3 mb-0 p-0 flex-wrap gap-3 w-100">
        {isCart
          ? cartItems.map((item, index) => {
              return isListlayout ? (
                <ItemListCard inCart={true} key={index} item={item} />
              ) : (
                <ItemCard inCart={true} key={index} item={item} />
              );
            })
          : null}
        {isFav
          ? favItems.map((item) => {
              return isListlayout ? (
                <ItemListCard favorite={true} key={item.id} item={item} />
              ) : (
                <ItemCard favorite={true} key={item.id} item={item} />
              );
            })
          : null}
        {!isFav && !isCart
          ? items.map((item) => {
              return isListlayout ? (
                <ItemListCard
                  favorite={favItems.find((favItem) => favItem.id === item.id) ? true : false}
                  key={item.id}
                  item={item}
                />
              ) : (
                <ItemCard
                  favorite={favItems.find((favItem) => favItem.id === item.id) ? true : false}
                  key={item.id}
                  item={item}
                />
              );
            })
          : null}
      </ul>
    </>
  );
}
