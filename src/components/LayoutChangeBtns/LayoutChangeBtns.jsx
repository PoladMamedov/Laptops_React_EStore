import { useEffect } from "react";
import { useLayout, useLayoutUpdate } from "../../context/LayoutContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export function LayoutChangeBtns() {
  const isListlayout = useLayout();
  const { setListLayout, setCardLayout } = useLayoutUpdate();
  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (localStorage.getItem("isListLayout") === "false") {
      localStorage.setItem("islistLayout", "false");
      setCardLayout();
    }
    if (localStorage.getItem("isListLayout") === "true") {
      localStorage.setItem("islistLayout", "true");
      setListLayout();
    }
    if (windowWidth < 580) setCardLayout();
  });
  return windowWidth < 580 ? null : (
    <div data-testid="layout-btns" className="btn-group">
      <input type="checkbox" className="btn-check" checked={isListlayout ? false : true} readOnly />
      <label
        onClick={() => {
          localStorage.setItem("isListLayout", "false");
          setCardLayout();
        }}
        className="btn btn-outline-secondary"
      >
        Cards
      </label>
      <input type="checkbox" className="btn-check" checked={isListlayout ? true : false} readOnly />
      <label
        onClick={() => {
          localStorage.setItem("isListLayout", "true");
          setListLayout();
        }}
        className="btn btn-outline-secondary"
      >
        List
      </label>
    </div>
  );
}
