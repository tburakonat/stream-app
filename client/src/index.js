import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhacers(applyMiddleware(reduxThunk)))

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

/*
    Redux Setup:
    1. Create actions
    2. Create reducers
    3. Create store
    4. Wrap App in Provider
    5. Give Provider Store Prop
*/
