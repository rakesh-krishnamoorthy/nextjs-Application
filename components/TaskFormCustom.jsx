'use client';
import React, { useEffect } from 'react'
import { createTaskCustom } from '@/utils/actions'
import { useFormStatus,useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const {pending}  = useFormStatus();
  return(
    <button type='submit' className='btn btn-primary join-item' disabled={pending}> 
    { pending ? 'please wait...' : 'Create Task' }
    </button>
  )
} 

const initialState = {
  message:'null',
}

const TaskForm = () => {

  const [state, formAction] = useFormState (createTaskCustom, initialState);
   useEffect(() => {
    if (state.message === 'error'){
      toast.error('there was an error');
      return;
    }
    if (state.message){
      toast.success('Task Created')
    } 
   } , [state]);

  return (
    <form action = { formAction } >
     {/* {state.message ? <p className='mb-2'> {state.message} </p> : null} */} 
      <div className="join w-full">
        <input type="text" className='input input-bordered w-full join-item'
            placeholder='type here ...' name = 'content' required />

        <SubmitBtn />

      </div>
    </form>
  )
}

export default TaskForm