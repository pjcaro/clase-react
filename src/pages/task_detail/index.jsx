import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const params = useParams();

  const renderList = () => {
    return (
      <div className="container">
        <h1>ID: {params.id}</h1>
      </div>
    );
  };
  return renderList();
};

export default TaskDetail;
