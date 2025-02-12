// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {

    
  
//   addtocart: (state, action) => {
//     console.log(action);
//     const existingProduct = state.cart.find((item) => item._id === action.payload._id);
  
//     if (existingProduct) {
//       existingProduct.qty += 1;
//     } else {
//       state.cart.push({ ...action.payload, qty: 1 });
//     }
//   },
  

    
//     removecart:(state,action) => {
//     state.cart=state.cart.filter((item)=>item._id!=action.payload)
//   },

    
//     addqty:(state,action)=>{
//       const productIncrease=state.cart.find((item)=>item._id==action.payload)
//       if(productIncrease){
//           productIncrease.qty+=1
//       }
//   },

   
//     subqty: (state,action)=>{
//       const productDecrease=state.cart.find((item)=>item._id==action.payload)
//       if(productDecrease){
//           productDecrease.qty=Math.max(productDecrease.qty-1,1)
//       }
//   },
//   },
// });

// export const { addtocart, removecart, addqty, subqty } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      console.log(action);  // Debugging: logs the payload for adding to cart
      const existingProduct = state.cart.find((item) => item._id === action.payload._id);
      
      if (existingProduct) {
        // If product already in cart, increase quantity
        existingProduct.qty += 1;
      } else {
        // If product not in cart, add it with qty 1
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },

    removecart: (state, action) => {
      // Remove product by filtering out the item with the matching _id
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    addqty: (state, action) => {
      // Increase quantity of the product in the cart
      const productIncrease = state.cart.find((item) => item._id === action.payload);
      if (productIncrease) {
        productIncrease.qty += 1;
      }
    },

    subqty: (state, action) => {
      // Decrease quantity of the product in the cart but not less than 1
      const productDecrease = state.cart.find((item) => item._id === action.payload);
      if (productDecrease) {
        productDecrease.qty = Math.max(productDecrease.qty - 1, 1); // Ensure qty doesn't go below 1
      }
    },
   
  },
});

export const { addtocart, removecart, addqty, subqty } = cartSlice.actions;

export default cartSlice.reducer;


