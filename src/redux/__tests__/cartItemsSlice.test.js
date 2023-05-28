import cartItemsReducer, { setCartItems, addToCart, decreaseAmount, removeFromCart } from "../slices/cartItemsSlice";

test("should return initial state", () => {
  expect(cartItemsReducer(undefined, { type: undefined })).toEqual([]);
});

test("should add items to state", () => {
  expect(cartItemsReducer([], setCartItems([{ item: 1 }]))).toEqual([{ item: 1 }]);
});

test("should add item to state", () => {
  expect(cartItemsReducer([], addToCart({ item: 3, id: 3 }))).toEqual([{ item: 3, amount: 1, id: 3 }]);
});

test("should increase items amount", () => {
  expect(cartItemsReducer([{ item: 1, amount: 1, id: 1 }], addToCart({ item: 1, id: 1 }))).toEqual([
    { item: 1, amount: 2, id: 1 },
  ]);
});

test("should decrease items amount", () => {
  expect(cartItemsReducer([{ item: 1, amount: 3, id: 1 }], decreaseAmount(1))).toEqual([{ item: 1, amount: 2, id: 1 }]);
});

test("should remove item from the state", () => {
  expect(cartItemsReducer([{ item: 1, amount: 3, id: 1 }], removeFromCart({ item: 1, amount: 3, id: 1 }))).toEqual([]);
});
