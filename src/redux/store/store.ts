import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
