'use client';
import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/ProfileSlice';
 const store = configureStore({ reducer: {
  profile : profileSlice
 } })
 export default store;