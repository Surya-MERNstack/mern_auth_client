import {combineReducers, configureStore} from '@reduxjs/toolkit';
import UserReducer from './user/UserSlice';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user : UserReducer});
const persistConfig = {
  key : "root", //data storage in the localstorage 
  version : 1,
  storage,
}
const  persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer : persistedReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false, // prevent an error using redux
  })
})

export const persistor = persistStore(store);