

const Form = ({onSubmit, inputText, inputTextHandler, goBack, onSubmitText}) => {
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
                <input className='button' type="submit" value={onSubmitText}  />
                <input className='buttonReturn' type='button' value="Return" onClick={goBack} />

            </div>
        </form>
    )
}
export default Form