import { createSlice } from '@reduxjs/toolkit'

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isDrawerOpen: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.isDrawerOpen = action.payload
    },
  },
})

export const selectIsDrawerOpen = (state) => state.drawer.isDrawerOpen

export const { toggleDrawer } = drawerSlice.actions

export default drawerSlice.reducer
