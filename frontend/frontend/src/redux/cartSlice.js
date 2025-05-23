import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:'myca',

    initialState:{
        cart:[]
    },

    reducers:{
        addToCart:(state,actions)=>{
             
            const cartData=state.cart.filter(e=>e.id == actions.payload.id)

            if(cartData.length>=1){
                alert('product already added')
            }else{
                state.cart.push(actions.payload)
                alert("added")
            }
        },

          quantyIncrease:(state,actions)=>{
              
            let items= state.cart.find(e=>e.id===actions.payload.id)

             if(items){
                items.qnty++
             }
          },

        quantyDecreae:(state,actions)=>{
             
                let items= state.cart.find(e=>e.id==actions.payload.id)

                if(!items){
                    return
                }

                if(items.length>1){
                    items.qnty--
                } else{
                    state.cart=state.cart.filter(e=>e.id!==actions.payload.id)
                }
          },
          productRemove:(state,actions)=>{
                 
                  state.cart=state.cart.filter(e=>e.id!==actions.payload.id)
          },
          cartEmpty:(state)=>{
              state.cart=[]
          }
    }
})

export const{addToCart,quantyDecreae,quantyIncrease,productRemove,cartEmpty}= cartSlice.actions

export default cartSlice.reducer