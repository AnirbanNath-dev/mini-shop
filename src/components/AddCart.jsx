import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/features/slices';


function AddCart({imgUrl , productName , price , quantity , id}) {
  const dispatch = useDispatch()

  const deleteFromCart = ()=>{

    dispatch(removeFromCart({id : id}))
    
  }



  return (
    <>
        <div className='flex gap-4 border-[2px] rounded-xl p-2 shadow-sm '>
            <img className='h-16 w-24 rounded-lg' src={imgUrl}alt="" />
            <div className='flex flex-col'>
              <h1 className='font-semibold text-lg'>{productName}</h1>
              <span className='text-sm'>Price : ₹ {price}</span>
              <div className='flex gap-6 items-center'>
              <span className='text-sm'>Quantity : {quantity}</span>
              <MdDelete className='text-red-500 text-xl cursor-pointer' onClick={deleteFromCart}/>

              </div>
            </div>
        </div>
    </>
  )
}

export default AddCart
