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
            
            const { name, price, image } = action.payload;


            const existingProduct = state.products.find((product) => product.name === name);
            if (existingProduct) {
                
                existingProduct.quantity += 1;

              } else {
               
                const product = {
                  id: nanoid(),
                  name,
                  quantity: 1,
                  price,
                  image,
                };
        
                state.products.push(product);
                state.totalProducts += 1;
              }
            },
        
            

            
        

        removeFromCart : (state , action)=>{

            const currentProduct = state.products.find(product => product.id == action.payload.id)

            if(currentProduct.quantity == 1){

                state.products = state.products.filter(product => product.id !== action.payload.id)
                state.totalProducts -= 1
            }else{
                currentProduct.quantity -= 1
            }

        },

    }
})



export const {addToCart , removeFromCart} = shopSlice.actions

export default shopSlice.reducer