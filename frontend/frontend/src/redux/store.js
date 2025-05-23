import { configureStore } from "@reduxjs/toolkit";
import myReducer from '../redux/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, myReducer)
const store=configureStore({

     reducer:{
        myca:persistedReducer
     }
})
 export  let persistor = persistStore(store)
export default store