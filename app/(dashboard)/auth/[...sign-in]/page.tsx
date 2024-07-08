import React from 'react'

interface params{
    userid?: string;
}

interface SignInPageProps{
    params:params;
}

const signInPage : React.FC<SignInPageProps> = ({params}) => {
    console.log(params)
  return (
    <div className='text-4xl'>signIn  Page </div>
  )
}

export default signInPage