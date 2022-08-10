import React from "react";
import useForm from "./useFormHook";

function Form() {
    const initialState = { username: '', password: '' };
    const onSubmit = (formData) => console.log(formData)

    const { formData, handleInputChange, handleSubmit, errors } = useForm(
        initialState,
        onSubmit
    );
    console.log("error:", errors)

    const { username, password } = formData;

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login Form:</legend>
                <ul>
                    <label htmlFor="name">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    /></ul>
                <ul>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="current-password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    /></ul>
                <ul><button type="submit">Submit</button></ul>
            </fieldset>
        </form>
    );
}

export default Form;
