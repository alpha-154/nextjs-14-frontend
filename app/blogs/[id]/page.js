import { notFound } from 'next/navigation'
import React from 'react'

function BlogsDetails({params}) {

  const { id } = params

  if(id === "3"){
    notFound()
  }

  return (
    <div className='mt-6'>
       The blog number is: {id}
    </div>
  )
}

export default BlogsDetails
