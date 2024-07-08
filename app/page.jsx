import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  console.log('home page');
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Learning Next.js </h1>  
      <Link href='/client' className='btn btn-outline '> get started </Link>
    </div>
  )
}

export default HomePage