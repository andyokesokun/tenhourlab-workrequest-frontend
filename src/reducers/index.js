import userSlice,{addUserName} from './userSlice'
import {combineReducers} from '@reduxjs/toolkit'

export default combineReducers({user: userSlice})

