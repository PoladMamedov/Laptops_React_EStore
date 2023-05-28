import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { LayoutChangeBtns } from "../LayoutChangeBtns/LayoutChangeBtns";
import { LayoutProvider } from "../../context/LayoutContext";
import renderer from "react-test-renderer";

afterEach(cleanup);

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
test("should match the snapshot", () => {
  const layoutBtnsSnap = renderer.create(
    <LayoutProvider>
      <LayoutChangeBtns />
    </LayoutProvider>
  );
  expect(layoutBtnsSnap).toMatchSnapshot();
});
