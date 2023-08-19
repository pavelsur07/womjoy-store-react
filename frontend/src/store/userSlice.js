import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: uuidv4(),
    isAuth: false,
  },
  reducers: {},
})

export default userSlice.reducer
