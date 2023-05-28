import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRoutes } from "./AppRoutes";
import { Modal } from "./components/Modal/Modal";
import { Header } from "./components/Header/Header";
import { fetchItems } from "./redux/slices/itemsSlice";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
  const dispatch = useDispatch();
  const modalOpened = useSelector((state) => state.modal.open);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      <LayoutProvider>
        <Header />
        <AppRoutes />
        {modalOpened ? <Modal /> : null}
      </LayoutProvider>
    </>
  );
}
export default App;
