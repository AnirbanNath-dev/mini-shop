import React from 'react'

function AddCart({imgUrl , productName , price , quantity}) {
  return (
    <>
        <div className='flex gap-4 border-[2px] rounded-xl p-2 shadow-sm '>
            <img className='h-16 w-24 rounded-lg' src={imgUrl}alt="" />
            <div className='flex flex-col'>
              <h1 className='font-semibold text-lg'>{productName}</h1>
              <span className='text-sm'>Price : ₹ {price}</span>
              <span className='text-sm'>Quantity : {quantity}</span>
            </div>
        </div>
    </>
  )
}

export default AddCart
