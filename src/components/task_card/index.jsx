import './index.css';

    const TaskCard = ({task} ) => {
        return (
            <div  className='card'>
                <div className='body'>
                    <h4><b> {task.description}</b></h4>
                </div>
            </div>
        )
    }

    export default TaskCard