"use client"
import React from 'react'

const Page = async({params}) => {
    const keyword= params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?name=${keyword}}`)
    const data= await res.json();
 

    console.log(data?.results, "data")
    return (
    <div>
        {
            !data?.results ? 
            <div>Bulunamadı</div>
            : 
            <div className='flex items-center flex-wrap gap-3'>
              {
                data.name
              }
            </div>
        }
    </div>
  )
}

export default Page