import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootSaga from './sagas'

import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
    let store;

    const logger = createLogger({});
    const sagaMiddleware = createSagaMiddleware();

    let middlewares = [
        sagaMiddleware
    ]

    if (process.env.NODE_ENV !== 'production'&&process.env.NODE_ENV !== 'test') {
        middlewares.push(logger) // DEV middlewares
    }

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            })
            : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const persistorConfig = {
        key: 'root',
        storage,
        blacklist: []
    };

    const reducer = persistReducer(persistorConfig, rootReducer);

    store = createStore(reducer, enhancer);

    sagaMiddleware.run(rootSaga);

    try {
        persistStore(store)
    } catch (e) {
        console.log(e)
    }

    return store
}
