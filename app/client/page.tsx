'use client';
import { useState } from "react";

const ClientPage = () => {
  const [count , setCount] = useState(0);
  console.log('print  client component');
  return (
    <div>
      <h1 className='text-7xl '>{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count+1)}>Increase</button>
      <button className="btn btn-secondary ml-2" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="btn btn-warning ml-2" onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}

export default ClientPage;