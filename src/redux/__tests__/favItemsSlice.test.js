import favItemsReducer, { setFavItems, addToFav, removeFromFav } from "../slices/favItemsSlice";

test("should return initial state", () => {
  expect(favItemsReducer(undefined, { type: undefined })).toEqual([]);
});

test("should add items to state", () => {
  expect(favItemsReducer([], setFavItems([{ item: 1 }]))).toEqual([{ item: 1 }]);
});

test("should push items to state", () => {
  expect(favItemsReducer([{ item: 1 }, { item: 2 }], addToFav({ item: 3 }))).toEqual([
    { item: 1 },
    { item: 2 },
    { item: 3 },
  ]);
});

test("should remove item from the state", () => {
  expect(
    favItemsReducer(
      [
        { item: 1, id: 1 },
        { item: 2, id: 2 },
        { item: 3, id: 3 },
      ],
      removeFromFav(1)
    )
  ).toEqual([
    { item: 2, id: 2 },
    { item: 3, id: 3 },
  ]);
});
