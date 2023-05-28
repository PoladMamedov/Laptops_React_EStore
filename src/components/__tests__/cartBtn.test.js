import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { CartBtn } from "../CartBtn/CartBtn";
import { LayoutChangeBtns } from "../LayoutChangeBtns/LayoutChangeBtns";
import { LayoutProvider } from "../../context/LayoutContext";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("should render cart button without text content", () => {
  render(<CartBtn cartItemsCount={0} />);
  expect(screen.getByTestId("cart-btn")).toBeInTheDocument();
  expect(screen.getByTestId("cart-btn")).toHaveTextContent("0");
});
test("should match the snapshot", () => {
  const cartBtnSnap = renderer.create(<CartBtn cartItemsCount={0} />);
  expect(cartBtnSnap).toMatchSnapshot();
});

test("should render proper layout buttons", () => {
  render(
    <LayoutProvider>
      <LayoutChangeBtns />
    </LayoutProvider>
  );

  expect(screen.getByTestId("layout-btns")).toBeInTheDocument();
  expect(screen.getByTestId("layout-btns")).toHaveTextContent("Card");
  expect(screen.getByTestId("layout-btns")).toHaveTextContent("List");
});
