import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/features/slices'

function Card({imageUrl , productName , price}) {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
  
    const addCart = ()=>{
        
        dispatch(addToCart({
            name : productName,
            price : price,
            image : imageUrl
        }))
        
    }
    

  return (
    <>
      <div className='flex flex-col rounded-xl shadow-sm shadow-black w-96 p-2 gap-4'>
        <img src={imageUrl} alt=""  className='h-64 w-96'/>

        <h1 className='font-semibold text-xl tracking-wide'>{productName}</h1>

        <span>Price : ₹ {price}</span>

        <div className='flex gap-4 justify-center'>
        <Button variant="contained" >Buy Now</Button>
        <Button variant="contained" onClick={addCart}>Add to Cart</Button>

        </div>
      </div>
    </>
  )
}

export default Card
