import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
    //Product Page
    addToCartLoading: false,
    sizeMsg: '',

    //Cart Page
    totalItems: 0,
    totalPrice: 0,
    cartItems: [],
    duplicateItem: false,
    
    //Alert
    itemAddedMessage: '',
    itemAddedClass: ''

}




export const getAllCartItems = createAsyncThunk('getAllCartItems', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get(`/api/v1/cart/getAllCartItems`);
        return data;

    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('')
    }
})

export const getCartItem = createAsyncThunk('getCartItem', async({id}, thunkAPI) => {
    
    try {
        const {data} = await axios.get(`/api/v1/cart/getCartItem/${id}`);
        return data;

    } catch (error) {
        console.log(error)
    }
})

export const checkIfItemAdded = createAsyncThunk('checkIfItemAdded', async({productID, size, amount}, thunkAPI) => {

    try {
        const {data} = await axios.post(`/api/v1/cart/checkIfItemAdded`, {productID, size});

        //Product with size already exists in this users cart
        if(data.duplicateItem === true){ 
            thunkAPI.dispatch(editCartItem({productID, type: 'duplicateItem', size, amount}))

        
        } else { 
            //New product add to cart
            thunkAPI.dispatch(addCartItem({size, sneakerID: productID, amount}))
        }
        return data;
    } catch (error) {
        console.log(error)
    }
})



export const addCartItem = createAsyncThunk('addCartItem', async({size, sneakerID, amount}, thunkAPI) => {
    try {
        const {data} = await axios.post(`/api/v1/cart/addCartItem`, {size, sneakerID, amount});
        thunkAPI.dispatch(getCartItem({id: data.cartItem._id}))
        thunkAPI.dispatch(getAllCartItems())

        return data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const editCartItem = createAsyncThunk('editCartItem', async({productID, type, size, amount}, thunkAPI) => {
    try {
        const {data} = await axios.patch(`/api/v1/cart/editCartItem/${productID}`, {type, size,amount});

        if(type === 'duplicateItem'){
            thunkAPI.dispatch(getCartItem({id: data.cartItem._id}))
        }
        thunkAPI.dispatch(getAllCartItems())
        return data;
    } catch (error) {
        console.log(error)
    }
})

export const removeCartItem = createAsyncThunk('removeCartItem', async({productID, size}, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/api/v1/cart/removeCartItem/${productID}/${size}`);
    
        thunkAPI.dispatch(getAllCartItems())
        return data;
      
    } catch (error) {
        console.log(error)
    }
})

export const removeAllCartItems = createAsyncThunk('removeAllCartItems', async(_, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/api/v1/cart/removeAllCartItems`);
        
        thunkAPI.dispatch(getAllCartItems())
        return data;

    } catch (error) {
        console.log(error)
    }
})




export const checkout = createAsyncThunk('checkout', async ({cardNumber, expires, cvv, amount}, thunkAPI) => {
   
  try {
    const { data } = await axios.post('/api/v1/cart/checkout',{cardNumber, expires, cvv, amount})
      

    thunkAPI.dispatch(removeAllCartItems())
    return data;
  } catch (error) {
    console.error('Error during checkout:', error);
  }
});




const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearSizeMsg: (state, action) => {
        state.sizeMsg = ''
      }, 

      clearItemAddedMessage: (state, action) => {
        state.itemAddedMessage = ''
      }
    }, 

    extraReducers:{
        [addCartItem.pending]: (state, action) => {
            state.addToCartLoading = true
        }, 

        [addCartItem.fulfilled]: (state, action) => {
            state.addToCartLoading = false;
        },

        [addCartItem.rejected]: (state, action) => {
            state.addToCartLoading = false
            state.sizeMsg = action.payload;
        },

        [getCartItem.pending]: (state, action) => {
            state.itemAddedLoading = true
        },

        [getCartItem.fulfilled]: (state, action) => {
            state.itemAddedLoading = false
            state.itemAddedMessage = 'Item has successfully been added to cart!'
            state.itemAddedClass = 'success'
        },


        [getAllCartItems.pending]: (state, action) => {
           
        },


        [getAllCartItems.fulfilled]: (state, action) => {
            const {cartItems, totalItems, totalPrice} = action.payload;
            
            state.cartItems = cartItems;
            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
        },

         [getAllCartItems.rejected]: (state, action) => {
            state.loading = false
        },



    }
    
})

export const {clearSizeMsg, clearItemAddedMessage} = cart.actions;
export default cart.reducer;