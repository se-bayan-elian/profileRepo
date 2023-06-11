'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getProfileInformation = createAsyncThunk(
  'profile/getProfileInformation',
  async () => {
    const res = await fetch('https://ybiapi.fresh-app.com/api/demo_profile', {next : {revalidate : 60000}});
    const data = await res.json()
    return data
  }
)
const ProfileSlice = createSlice({
  name: 'profile',
  initialState: [],
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileInformation.fulfilled, (state, action) => {
      state.push(action.payload)
    })
  }


})
export { getProfileInformation };
export default ProfileSlice.reducer;