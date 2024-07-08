import { getTask } from '@/utils/actions'
import Link from 'next/link';
import EditForm from "@/components/EditForm"

const SingleTaskpage = async ({params}) => {
    const task = await getTask(params.id);
  return (
    <div>
      <div className="mb-8">
        <Link href='/tasks' className='btn btn-secondary'> Back to Tasks </Link>
      </div>
      <EditForm task={task} />
      
    </div>
  )
}

export default SingleTaskpage;