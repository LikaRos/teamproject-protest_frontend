import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/auth-slice';
import questionReducer from './questions/questions-slice';

//----------------------------------------------------------------//

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'user'],
};

const persistConfigQuestions = {
  key: 'questions',
  storage,
  whitelist: ['questions', 'answers', 'result'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedQuestions = persistReducer(
  persistConfigQuestions,
  questionReducer
);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    questions: persistedQuestions,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);
export { store, persistor };
