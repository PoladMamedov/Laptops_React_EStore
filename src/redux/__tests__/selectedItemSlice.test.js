import selectedItemReducer, { setSelectedItem } from "../slices/selectedItemSlice";

test("should set the selected item", () => {
  expect(selectedItemReducer(null, setSelectedItem({ selectedItemAdded: true }))).toEqual({ selectedItemAdded: true });
});
