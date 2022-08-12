import { useEffect, useState } from 'react'
import TaskCard from '../../components/task_card'
import { getTaskList } from '../../services/api'
import './index.css'


const TaskList = () => {
  
    const [tasks, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getTasks();
    },[])

    const getTasks = () => {
        setIsLoading(true)

        getTaskList().then((res) => {
            setTask(res.data)
            setIsLoading(false)
        }).catch((error) =>{
            setIsLoading(false)
            console.error(error)
        })
    }

    const renderLoading = () => (
        <h1> Cargando...</h1>
    )

    const renderTask = (task) => (
        <TaskCard task={task} />
    )

    const renderTasks = () => (
        tasks.length ? tasks.map(task =>
            renderTask(task)) : <h3>No hay datos...</h3>
    )

    const renderList = () => (
        <div className='container'>
            {renderTasks()}
        </div>
    )

    return isLoading ? renderLoading() : renderList()
   
}

export default TaskList