import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";

const TasksPage = () => {
    return (
      <div className='max-w-lg'>
        <TaskFormCustom />
        <TaskList />

      </div>
    )
  }
  
export default TasksPage;