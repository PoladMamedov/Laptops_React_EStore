import "@testing-library/jest-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Modal } from "../Modal/Modal";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore({
    selectedItem: {
      id: 1,
      name: "Lenovo IdeaPad L3",
      price: "16999",
      imgPath: "./img/item1.webp",
      article: "130920",
      color: "grey",
    },
    modal: {
      isRemoving: false,
    },
  });
  cleanup();
});

test("should render adding to cart modal and add item to store by pressing 'add'", () => {
  render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  expect(screen.getByTestId("modal")).toBeInTheDocument();
  const addBtn = screen.getByText("Add");
  expect(addBtn).toBeInTheDocument();
  fireEvent.click(addBtn);
  const actions = store.getActions();
  expect(actions).toEqual([
    {
      type: "cartItems/addToCart",
      payload: {
        id: 1,
        name: "Lenovo IdeaPad L3",
        price: "16999",
        imgPath: "./img/item1.webp",
        article: "130920",
        color: "grey",
      },
    },
    {
      type: "modalOpen/closeModal",
      payload: undefined,
    },
  ]);
});

test("should render removing from cart modal and remove item from store by pressing 'rrmove'", () => {
  store = mockStore({
    selectedItem: {
      id: 1,
      name: "Lenovo IdeaPad L3",
      price: "16999",
      imgPath: "./img/item1.webp",
      article: "130920",
      color: "grey",
    },
    modal: {
      isRemoving: true,
    },
  });
  render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  expect(screen.getByTestId("modal")).toBeInTheDocument();
  const removeBtn = screen.getByText("Remove");
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
  const actions = store.getActions();
  expect(actions).toEqual([
    {
      type: "cartItems/removeFromCart",
      payload: {
        id: 1,
        name: "Lenovo IdeaPad L3",
        price: "16999",
        imgPath: "./img/item1.webp",
        article: "130920",
        color: "grey",
      },
    },
    {
      type: "modalOpen/closeModal",
      payload: undefined,
    },
  ]);
});

test("should close modal", () => {
  render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  const modalBg = screen.getByTestId("modal-bg");
  const closeBtn = screen.getByTestId("close-modal-btn");
  expect(modalBg).toBeInTheDocument();
  fireEvent.click(modalBg);
  fireEvent.click(closeBtn);
  const actions = store.getActions();
  expect(actions).toEqual([
    {
      type: "modalOpen/closeModal",
      payload: undefined,
    },
    {
      type: "modalOpen/closeModal",
      payload: undefined,
    },
  ]);
});
