import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { FavoritesBtn } from "../FavoritesBtn/FavoritesBtn";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("should redner favorites btn without text content", () => {
  render(<FavoritesBtn favItemsCount={0} />);
  expect(screen.getByTestId("fav-btn")).toBeInTheDocument();
  expect(screen.getByTestId("fav-btn")).toHaveTextContent("0");
});
test("should match the snaoshot", () => {
  const favoritesBtnSnap = renderer.create(<FavoritesBtn favItemsCount={0} />);
  expect(favoritesBtnSnap).toMatchSnapshot();
});
