import TaskDetail from '../../pages/task_detail';
import './index.css';

    const TaskCard = ({task} ) => {
        return (
            <div  className='card'>
                <div className='body' onClick={TaskDetail}>
                    <h4><b> {task.description}</b></h4>
                </div>
            </div>
        )
    }

    export default TaskCard