import { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const form = { ...formData, [e.target.name]: e.target.value }
        setFormData(form);
        validate(form)
    }

    const validate = (form) => {
        const keys = Object.keys(form)
        const errors = keys.reduce((accumulator, current) => {
            if (form[current] === "") {
                return { ...accumulator, [current]: current + " no puede ser vacío"  };
            }
            return accumulator;
        }, {});
        setErrors(errors)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData);
    }

    return { formData, handleInputChange, handleSubmit, errors };
}

export default useForm