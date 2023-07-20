"use client"
import React from 'react'

const getUserInfo = async (id) => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return await res.json();
}

const Page = async ({data}) => {
    const id = data.id
    const userDetails = getUserInfo(id)

  return (
    <div>
       {userDetails.name}
    </div>
  )
}

export default Page