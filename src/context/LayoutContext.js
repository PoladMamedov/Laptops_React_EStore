import React, { useContext, useState } from "react";
const LayoutContext = React.createContext();
const LayoutContextUpdate = React.createContext();

export function useLayout() {
  return useContext(LayoutContext);
}
export function useLayoutUpdate() {
  return useContext(LayoutContextUpdate);
}

export function LayoutProvider({ children }) {
  const [isListLayout, setIsListLayout] = useState(false);

  function setCardLayout() {
    setIsListLayout(false);
  }
  function setListLayout() {
    setIsListLayout(true);
  }

  return (
    <LayoutContext.Provider value={isListLayout}>
      <LayoutContextUpdate.Provider value={{ setListLayout, setCardLayout }}>{children}</LayoutContextUpdate.Provider>
    </LayoutContext.Provider>
  );
}
