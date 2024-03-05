import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'app';

import store, { persistor } from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.querySelector('#root');

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={undefined} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
} else {
	throw new Error("Root element with id 'root' not found.");
}
