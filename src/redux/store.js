import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemsSlice";
import favItemsReducer from "./slices/favItemsSlice";
import cartItemsReducer from "./slices/cartItemsSlice";
import selectedItemReducer from "./slices/selectedItemSlice";
import modalReducer from "./slices/modalSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favItems", "cartItems"],
};

const rootReducer = combineReducers({
  items: itemsReducer,
  favItems: favItemsReducer,
  cartItems: cartItemsReducer,
  modal: modalReducer,
  selectedItem: selectedItemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
