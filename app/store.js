import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../slices/DrawerSlice'

export default configureStore({
  reducer: {
    drawer: drawerReducer,
  },
})
