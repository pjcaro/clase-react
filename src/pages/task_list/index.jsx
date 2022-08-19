import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../../components/task_card";
import { deleteTask, getTaskList } from "../../services/api";
import "./index.css";

const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    setIsLoading(true);

    getTaskList()
      .then((res) => {
        setTask(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  const renderLoading = () => <h1> Cargando...</h1>;

  const onDeleteTask = (event,id) => {
      event.preventDefault();
      const proced = window.confirm("Estas seguro que quieres eliminar esta tarea?");
      if(proced){
          setIsLoading(true);
          deleteTask(id)
          .then((res) => {
              if(res.success){
                  getTasks()
              }
          })
          .catch((error)=> {
              console.log(error)
          })
          .finally(() => setIsLoading(false))
      }else{
          console.log("no hacer nada")
      }
  }

  const renderDeleteTask = (id) => {
      return( 
          <button onClick={(e) => onDeleteTask(e, id)}>Eliminar tarea </button>
      )
  }
 
  const renderTask = (task) => (
    <Link
      to={`/detail/${task._id}`}
      key={task._id}
      className="task-link">
      <TaskCard task={task} />
      {renderDeleteTask(task._id)}
    </Link>
  );

  const renderTasks = () =>
    tasks.length ? (
      tasks.map((task) => renderTask(task))
    ) : (
      <h3>No hay datos...</h3>
    );

  const renderActions = () => (
    <div className="actions">
      <button className="button" type="reload" onClick={getTasks}>
        Recargar lista{" "}
      </button>
      <Link to="create-task">
        <button className='button' type='newTask'>New Task</button>
      </Link>
    </div>
  );

  const renderList = () => (
    <div className="container">
      {renderActions()}
      {renderTasks()}
    </div>
  );

  return isLoading ? renderLoading() : renderList();
};

export default TaskList;
