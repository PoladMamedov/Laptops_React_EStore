import modalReducer, { openModal, closeModal } from "../slices/modalSlice";

test("should set adding modal opened to true", () => {
  expect(modalReducer({ open: false, isRemoving: false }, openModal())).toEqual({ open: true, isRemoving: false });
});

test("should set removing modal opened to true", () => {
  expect(modalReducer({ open: false, isRemoving: false }, openModal(true))).toEqual({ open: true, isRemoving: true });
});

test("should set modal opened to false", () => {
  expect(modalReducer({ open: true, isRemoving: true }, closeModal())).toEqual({ open: false, isRemoving: false });
});
