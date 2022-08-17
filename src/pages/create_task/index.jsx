import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../services/api';
import "./index.css"

const CreateTask = () => {

    const [inputText, setInputText] = useState("")
    const navigate = useNavigate()

    const inputTextHandler = (props) => {
        setInputText(props.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            "description": inputText
        }
        createTask(data).then(() =>
            goBack()
        )
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <div>
                <h1 className='text'>
                    New Task
                </h1>
            </div>
            <div>
                <input className='input' value={inputText} onChange={inputTextHandler} type="text" required />
            </div>
            <div>
                <input className='button' type="submit" value="Submit"  />
                <input className='buttonReturn' type='button' value="Return" onClick={goBack} />

            </div>
        </form>
    )
}

export default CreateTask