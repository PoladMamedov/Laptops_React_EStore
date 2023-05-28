import { useSelector } from "react-redux";
import { ItemList } from "../components/ItemsList/ItemsList";

export function Favorites() {
  const favItems = useSelector((state) => state.favItems);

  return (
    <>
      <h3 className="text-center pt-3 pb-2">Favorite items:</h3>
      {favItems.length === 0 ? <p className="w-100 text-center fs-4">Empty...</p> : null}
      <ItemList isFav={true} />
    </>
  );
}
