# Quickstart
```
yarn add redux-persist
// or
npm install redux-persist
```

## 1.Basic Usage
## 2.Nested Persists
## 3.Hot Module Replacement

## Basic Usage
```
Basic usage involves adding persistReducer and persistStore to your setup. IMPORTANT Every app needs to decide how many levels of state they want to "merge". The default is 1 level. Please read through the state reconciler docs for more information.

import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```

# API

## persistReducer(config, reducer)
```
* arguments
    * config object
        required config: key, storage
        notable other config: whitelist, blacklist, version, stateReconciler, debug
    * reducer function
        any reducer will work, typically this would be the top level reducer returned by combineReducers
* returns an enhanced reducer
```

## persistStore(store, [config, callback])
```
* arguments
    * store redux store The store to be persisted.
    * config object (typically null)
        * If you want to avoid that the persistence starts immediately after calling persistStore, set the option manualPersist. Example: { manualPersist: true } Persistence can then be started at any point with peristor.persist(). You usually want to do this if your storage is not ready when the persistStore call is made.
    * callback function will be called after rehydration is finished.
* returns persistor object
```
## persistor object
```
* the persistor object is returned by persistStore with the following methods:
    * .purge()
        * purges state from disk and returns a promise
    * .flush()
        * immediately writes all pending state to disk and returns a promise
    * .pause()
        * pauses persistence
    * .persist()
        * resumes persistence
```

### More information check at [redux-persist](https://github.com/rt2zz/redux-persist)