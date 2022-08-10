import { useEffect } from "react";
import { useState } from "react";

function Title({ text }) {
    const [variable, setVariable] = useState('Hola')

    useEffect(() => {
        setTimeout(() => {
            setVariable('Chau')
        }, 3000)
    }, [])

    return (
        <div>
            <p>{variable}</p>
            <code>{text !== '' ? text : 'cargando'}</code>
        </div>
    );
}

export default Title
