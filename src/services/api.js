const TOKEN = `Bearer ${process.env.REACT_APP_TOKEN}`;

const BASE_URL = "https://api-nodejs-todolist.herokuapp.com";

const getTaskList = () => 
    fetch(`${BASE_URL}/task`,{
        method: "get",
        headers: new Headers({
            Authorization: TOKEN,
        }),
    }).then((response) => response.json());


export {getTaskList}