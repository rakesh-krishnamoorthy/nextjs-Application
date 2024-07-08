import { editTask } from '@/utils/actions'
import React from 'react'


const EditForm = ({task}) => {
    const {id , completed , content } = task

    return (
        <form action= { editTask } className='max-w-md p-12 rounded-lg border-base-300'>
            <input type="hidden" name='id' value={id} />

            {/* content*/}

            <input
             type=" text"
             required
             defaultValue={content}
             name='content'
             className='input input-bordered w-full'  />

              {/* completed */}

            <div className="form-control my-5">
                <label htmlFor="completed" className='label cursor-pointer'>
                    <span className='label-text'> completed</span>
                    <input type="checkbox" defaultChecked={ completed } id='completed'
                    name='completed' className='checkbox checkbox-primary checkbox-sm' />
                </label>
            </div>

            <button className='btn btn-success btn-sm btn-block'> edit</button>

        </form>
  )
}

export default EditForm