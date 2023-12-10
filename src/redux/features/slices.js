import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    totalProducts : 0,
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers : {
        addToCart : (state , action )=>{
            
            const product = {
                id : nanoid(),
                name : action.payload.name,
                quantity : 1,
                price : action.payload.price,
                image: action.payload.image

            }


            state.products.push(product)
            state.totalProducts += 1
        },

        removeFromCart : (state , action)=>{

            state.products = state.products.filter(product => product.id !== action.payload.id)
            state.totalProducts -= 1

        }
    }
})



export const {addToCart , removeFromCart} = shopSlice.actions

export default shopSlice.reducer