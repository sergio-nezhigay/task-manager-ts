import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export type RootState = {
  tasks: ReturnType<typeof tasksReducer>;
  filters: ReturnType<typeof filtersReducer>;
};

const tasksPersistConfig = {
  key: "tasks",
  storage,
};

const filterPersistConfig = {
  key: "filters",
  storage,
};

const persistedTasksReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filtersReducer
);

const rootReducer = combineReducers({
  tasks: persistedTasksReducer,
  filters: persistedFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
