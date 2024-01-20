import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
   //Products Page
    openFilter: '',
    brands: [],
    totalBrands: [],
    loading: true,
    title: '',
    brand: '',
    price: '',
    sort: '',
    products: [],
    currentPage: 0,
    numberOfPages: 0,
    totalProducts: 0,

    //Single Product Page 
    productLoading: false,
    product: null,
    relatedProducts: [],
}






  export const getAllProducts = createAsyncThunk('getAllProducts',  async({title, brand, price, primary, sort, page}, thunkAPI) => {
     
      try {
         const {data} = await axios.get(`/api/v1/products/getAllProducts?title=${title}&brand=${brand}&price=${price}&sort=${sort}&page=${page}`);
         console.log(data)
         return data;

      } catch (error) {
         console.log(error)
        
      }
  })


    export const getSingleProduct = createAsyncThunk('getSingleProduct',  async({id}, thunkAPI) => {
      console.log(id)
     
      try {
         const {data} = await axios.get(`/api/v1/products/getSingleProduct/${id}`);
         return data;

      } catch (error) {
         console.log('getsingleProduct')
         console.log(error)
        
      }
  })








const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
      handleFilterOpen: (state, action) => {
         if(action.payload === state.openFilter){
            state.openFilter = ''
         } else {
            state.openFilter = action.payload
         }
      },

      

      changeFilter: (state, action) => {
         const {name, value} = action.payload;
         state[name] = value;
      },

      clearFilters: (state, action) => {
         state.title = ''
         state.brand = ''
         state.price = ''
      },


      clearSort: (state, action) => {
        state.sort = ''
      },

      clearAllFilters: (state, action) => {
         state.title = ''
         state.brand = ''
         state.price = ''
         state.sort = ''
      },



      handleShowMobileFilter: (state, action) => {
         if(!action.payload){
             state.showMobileFilterComponent = !state.showMobileFilterComponent
         } else {
            state.showMobileFilterComponent = action.payload
         }
       
      }

    }, 

    extraReducers:{

         [getAllProducts.pending]: (state, action) => {
            state.loading = true
         }, 

         [getAllProducts.fulfilled]: (state, action) => {
            const {brands, totalBrands, products, currentPage, numberOfPages, totalProducts} = action.payload;
           
            state.loading = false;
            state.brands = brands;
            state.totalBrands = totalBrands
            state.products = products;
            state.currentPage = currentPage;
            state.numberOfPages = numberOfPages;
            state.totalProducts = totalProducts;
         },

          [getAllProducts.rejected]: (state, action) => {
           
         },

         [getSingleProduct.pending]: (state, action) => {
            state.productLoading = true
         },


         [getSingleProduct.fulfilled]: (state, action) => {
            const {product, relatedProducts} = action.payload;
            
            state.productLoading = false
            state.product = product
            state.relatedProducts = relatedProducts
         },


         [getSingleProduct.rejected]: (state, action) => {
            
         },






        }
    
})

export const {handleFilterOpen, changeFilter, clearFilters, clearSort, clearAllFilters} = filterSlice.actions
export default filterSlice.reducer;