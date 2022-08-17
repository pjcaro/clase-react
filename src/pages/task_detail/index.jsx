import './index.css';
import { getTaskById } from '../../services/api';
import { useEffect, useState } from 'react';
import TaskCard from '../../components/task_card';
import { Link, useParams } from "react-router-dom";

const TaskDetail = () => {

    const [task, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        getTask()
    }, [])

    const getTask = () => {
        setIsLoading(true)

        getTaskById(params.id)
            .then((res) => {
                setTask(res.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                console.error(error)
            })
    }

    const renderLoading = () => (
        <h1>Cargando...</h1>
    )

    const renderTask = () => (
        <TaskCard task={task} />
    )

    const renderBackButton = () => (
        <Link to="/">
            <button className='button' type='return'>Back to all tasks</button>
        </Link>
    )


    const renderActions = () => (
        <>
            {renderBackButton()}
        </>
    )


    const renderList = () => (
        <>
            {renderTask()}
            {renderActions()}
        </>
    )

    return isLoading ? renderLoading() : renderList()
}

export default TaskDetail