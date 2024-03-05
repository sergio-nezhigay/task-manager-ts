import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tasksReducer } from './tasks-slice';
import { filtersReducer } from './filters-slice';

const tasksPersistConfig = {
	key: 'tasks',
	storage,
};

const filterPersistConfig = {
	key: 'filters',
	storage,
};

const persistedToDosReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistedFilterReducer = persistReducer(
	filterPersistConfig,
	filtersReducer
);

const rootReducer = combineReducers({
	tasks: persistedToDosReducer,
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
