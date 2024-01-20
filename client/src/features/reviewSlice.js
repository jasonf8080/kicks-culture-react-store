import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
    loading: false,
    reviews: [],
    totalReviews: 0,
    positiveReviews: 0, 
    numberOfPages: 0,
    overallRating: 0,
    groupedRatings: [],

    

    //User Rating Modal
    showUserRatingModal: false,
    isEditing: false,
    userRating: 0,
    userReview: '',
    reviewActionLoading: false,
    ratingError: '',
    reviewError: '',


    //Modals
    reviewAlreadyExistsMessage: '',
    
    //Alerts
    reviewActionMessage: '',
    reviewActionClass: ''


}




export const getAllReviews = createAsyncThunk('getAllReviews',  async({id, page}, thunkAPI) => {
     
      try {
         const {data} = await axios.get(`/api/v1/reviews/getAllReviews/${id}?page=${page}`);
         console.log(data)
         return data;

      } catch (error) {
         console.log(error)
        
      }
  })


export const getSingleReview = createAsyncThunk('getSingleReview',  async({productID}, thunkAPI) => {
     
      try {
         const {data} = await axios.get(`/api/v1/reviews/getSingleReview/${productID}`);
         console.log(data)
         return data;

      } catch (error) {
         console.log(error)
      }
  })




export const createReview = createAsyncThunk('createReview',  async({productID, rating, review}, thunkAPI) => {
        
      try {
         const {data} = await axios.post(`/api/v1/reviews/createReview/${productID}`, {rating, review});
         

         thunkAPI.dispatch(handleUserRatingModal({value: false}))
         thunkAPI.dispatch(getAllReviews({id: productID}))

         return data;
        


      } catch (error) {
         console.log(error.response.data.msg)

         //User has already reviewed this product
          if(error.response.data.msg === 'Review already exists. Do you wish to edit your review?'){
             //thunkAPI.dispatch()
             return thunkAPI.rejectWithValue(error.response.data.msg)
          }

          //No rating provided
          if(error.response.data.msg === 'Please provide a rating'){
             //thunkAPI.dispatch()
             return thunkAPI.rejectWithValue(error.response.data.msg)
          }


           //No review provided
          if(error.response.data.msg === 'Please provide a review'){
             //thunkAPI.dispatch()
             return thunkAPI.rejectWithValue(error.response.data.msg)
          }

          
      }
  })



export const editReview = createAsyncThunk('editReview',  async({productID, rating, review}, thunkAPI) => {
        
      try {
         const {data} = await axios.patch(`/api/v1/reviews/editReview/${productID}`, {rating, review});

         thunkAPI.dispatch(handleUserRatingModal({value: false}))
         thunkAPI.dispatch(getAllReviews({id: productID}))

         return data;
        
      } catch (error) {
          //No rating provided
          if(error.response.data.msg === 'Please provide a rating'){
             //thunkAPI.dispatch()
             return thunkAPI.rejectWithValue(error.response.data.msg)
          }


           //No review provided
          if(error.response.data.msg === 'Please provide a review'){
             //thunkAPI.dispatch()
             return thunkAPI.rejectWithValue(error.response.data.msg)
          }
        
        
      }
  })


  export const deleteReview = createAsyncThunk('deleteReview',  async({productID}, thunkAPI) => { 
      try {
         const {data} = await axios.delete(`/api/v1/reviews/deleteReview/${productID}`);

         thunkAPI.dispatch(handleUserRatingModal({value: false}))
         thunkAPI.dispatch(getAllReviews({id: productID}))

         return data;
        
      } catch (error) {
         console.log(error)
      }
  })





const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    reducers: {
        handleUserRating: (state, action) => {
            if(action.payload === state.userRating){
                state.userRating = 0;
            } else {
                state.userRating = action.payload;
            }
            
        }, 

        handleUserReview: (state, action) => {
            state.userReview = action.payload;
        },

        handleUserRatingModal: (state, action) => {
            if(state.showUserRatingModal === true){
                state.userRating = 0
                state.userReview = null
                state.isEditing = false
            }

            
            state.showUserRatingModal = action.payload.value
        },

        clearErrorMessages: (state, action) => {
            state.ratingError = ''
            state.reviewError = ''
        },

       

        clearReviewActionMessage: (state, action) => {
            state.reviewActionMessage = ''
        },

        clearReviewAlreadyExists: (state, action) => {
            state.reviewAlreadyExistsMessage = ''
            state.userRating = 0
            state.userReview = ''
        }

        



    }, 

    extraReducers:{
       [getAllReviews.pending]: (state, action) => {
        state.loading = true
       },

       [getAllReviews.fulfilled]: (state, action) => {
        const {reviews, totalReviews, positiveReviews, numberOfPages, overallRating, groupedRatings} = action.payload

        state.loading = false
        state.reviews = reviews
        state.totalReviews = totalReviews
        state.positiveReviews = positiveReviews
        state.numberOfPages = numberOfPages
        state.overallRating = overallRating;
        state.groupedRatings = groupedRatings
        
       },

       [getSingleReview.fulfilled]: (state, action) => {
          const {review, rating} = action.payload.review;
          
          state.isEditing = true
          state.showUserRatingModal = true
          state.reviewAlreadyExistsMessage = ''
          state.userRating = rating
          state.userReview = review
       },

       [createReview.pending]: (state, action) => {
         state.reviewActionLoading = true
       },

       [createReview.fulfilled]: (state, action) => {
          state.reviewActionLoading = false
          state.reviewActionMessage = action.payload.message
          state.reviewActionClass = 'success'
       },

        [createReview.rejected]: (state, action) => {
           state.reviewActionLoading = false
    


           if(action.payload === 'Review already exists. Do you wish to edit your review?'){
             state.reviewAlreadyExistsMessage = action.payload
             state.showUserRatingModal = false
           }

           if(action.payload === 'Please provide a rating'){
             state.ratingError = action.payload
           }

           if(action.payload === 'Please provide a review'){
            state.reviewError = action.payload;
           }

        
       },

        [editReview.pending]: (state, action) => {
            state.reviewActionLoading = true
        },

        [editReview.fulfilled]: (state, action) => {
            state.reviewActionLoading = false
            state.isEditing = false
            state.reviewActionMessage = action.payload.message
            state.reviewActionClass = 'success'
        },

        [editReview.rejected]: (state, action) => {
            state.reviewActionLoading = false
            if(action.payload === 'Please provide a rating'){
             state.ratingError = action.payload
           }

           if(action.payload === 'Please provide a review'){
            state.reviewError = action.payload;
           }
        },

        [deleteReview.pending]: (state, action) => {
           
        },

        [deleteReview.fulfilled]: (state, action) => {
            state.reviewActionMessage = action.payload.message
            state.reviewActionClass = 'danger'
            
        },

        [deleteReview.rejected]: (state, action) => {
                //state.createReviewMessage = 'Please sign in to perform this action'
        },
    }
    
})

export const {handleUserRating, handleUserReview, handleUserRatingModal, handlePage,  clearErrorMessages, clearReviewActionMessage, clearReviewAlreadyExists} = reviewSlice.actions
export default reviewSlice.reducer;