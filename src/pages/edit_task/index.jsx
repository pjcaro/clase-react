import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/form";
import { editTask, getTaskById } from "../../services/api";

const EditTask = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    getTaskById(params.id)
      .then((res) => {
        setInputText(res.data.description);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const inputTextHandler = (props) => {
    setInputText(props.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      description: inputText,
    };
    editTask(data, params.id).then(() => goBack());
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Form
      onSubmit={onSubmit}
      inputText={inputText}
      inputTextHandler={inputTextHandler}
      goBack={goBack}
      onSubmitText='Update'
    />
  );
};

export default EditTask;
