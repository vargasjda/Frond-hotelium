import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducers/myReducer';
import anotherReducer from './reducers/anotherReducer';


const store = configureStore({
  reducer: {
    myReducer,
    anotherReducer,
  },
});


export default store;
