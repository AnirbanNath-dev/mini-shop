import React from 'react'
import Card from '../components/Card'
import Cardsdata from '../data/products'

function Home() {
    
  return (
    <>

        <div className='w-full px-28 py-8 text-center'>

            <h1 className='text-3xl tracking-wide border-b-2 py-2 border-black'>Branded Products </h1>

            <div className='flex gap-12 flex-wrap justify-center mt-8'>

                {
                    Cardsdata.map((data , index)=>(
                        
                        <Card key={index} imageUrl={data.imgdata} productName={data.rname} price={data.price}/>
                       
                    ))
                }

            </div>

        </div>


    </>
  )
}

export default Home
