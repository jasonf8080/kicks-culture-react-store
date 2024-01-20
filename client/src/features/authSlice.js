import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'
import { getAllCartItems } from "./cartSlice";


const initialState = {
  loading: false,
  user: null,
  showLinks: false,
  prevLocation: null,
  isRegistering: true,
  name: '', 
  lastName: '',
  email: '', 
  password: '',
  authMessage: '',
  authClass: null,
  actionUnauthorized: false,

}




export const registerUser = createAsyncThunk('registerUser', async({name, lastName, email, password}, thunkAPI) => {

    try {
        const {data} = await axios.post(`/api/v1/auth/register`, {name, lastName, email, password});
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const loginUser = createAsyncThunk('loginUser', async({email, password}, thunkAPI) => {
     
    try {
        const {data} = await axios.post(`/api/v1/auth/login`, {email, password});
         return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const getCurrentUser = createAsyncThunk('getCurrentUser', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get(`/api/v1/auth/getCurrentUser`);
        
        thunkAPI.dispatch(getAllCartItems());
        return data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const editUser = createAsyncThunk('editUser', async({name, lastName, email}, thunkAPI) => {

    try {
        const {data} = await axios.patch(`/api/v1/auth/editUser`, {name, lastName, email});
        //thunkAPI.dispatch(getCurrentUser())
        return data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})



export const logout = createAsyncThunk('logout', async(_, thunkAPI) => {
    try{
        const {data} = await axios.get(`/api/v1/auth/logout`);
        window.location.reload()
        return data
    } catch(error) {
        console.log(error)
    }

})


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
       handleShowLinks: (state, action) => {
        if(action.payload){
            state.showLinks = action.payload
        } 

        if(!action.payload){
            state.showLinks = !state.showLinks
        }
        
       },

       handleRegistering:(state, action) => {
        const {prevLocation, value} = action.payload

        if(value === 'login'){    
            state.isRegistering = false
        } 

        if(value === 'register'){
            state.isRegistering = true

        } 

        if(!value){
            state.isRegistering = !state.isRegistering
        }
    
        if(prevLocation === '/register' || 'editProfile'){
            state.prevLocation = '/'
        } else {
             state.prevLocation = prevLocation
        }

       },

       setupEdit: (state, action) => {
        state.name = state.user.name
        state.lastName = state.user.lastName
        state.email = state.user.email
       }, 

       handleChange: (state, action) => {
        const {value, name} = action.payload
        state[name] = value
       }, 

       handleInitialView: (state, action) => {
        state.initialView.viewedProduct = true
        state.initialView.tempID = action.payload
       },  

       handleActionUnauthorized: (state, action) => {
        state.actionUnauthorized = action.payload.value
       }, 

       clearAuthMessage: (state, action) => {
        state.authMessage = ''
        state.authClass = null
       }

    }, 

    extraReducers:{

    [registerUser.pending]: (state, action) => {
        state.loading = true
    },



      [registerUser.fulfilled]: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.name = ''
        state.lastName = ''
        state.email = ''
        state.password = ''
        state.authMessage = action.payload.message
        state.authClass = 'success-message'
      },


      [registerUser.rejected]: (state, action) => {
         state.loading = false
         state.authMessage = action.payload
         state.authClass = 'error-message'
      },


        [loginUser.pending]: (state, action) => {
            state.loading = true
        },

        [loginUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user;
            state.authMessage = action.payload.message
            state.authClass = 'success-message'
        },

        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.authMessage = action.payload
            state.authClass = 'error-message'
        },


    
      [getCurrentUser.pending]: (state, action) => {

      },

      [getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload.user;
       },

       [getCurrentUser.rejected]: (state, action) => {

       },

       [editUser.pending]: (state, action) => {
           state.loading = true
        },

       [editUser.fulfilled]: (state, action) => {
          state.loading = false
          state.authMessage = action.payload.message
          state.authClass = 'success-message'
       },

       [editUser.rejected]: (state, action) => {
         state.loading = false
         state.authMessage = action.payload
         state.authClass = 'error-message'
       },
       






      
    }
    
})

export const {handleShowLinks, handleRegistering, setupEdit, handleChange, handleInitialView, handleActionUnauthorized, clearAuthMessage} = authSlice.actions
export default authSlice.reducer;