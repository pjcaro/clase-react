import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import { createTask } from "../../services/api";
import "./index.css";

const CreateTask = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const inputTextHandler = (props) => {
    setInputText(props.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      description: inputText,
    };
    createTask(data).then(() => goBack());
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
      onSubmitText='Create'

    />
  );
};

export default CreateTask;
