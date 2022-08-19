const TOKEN = `Bearer ${process.env.REACT_APP_TOKEN}`;

const BASE_URL = "https://api-nodejs-todolist.herokuapp.com";

const getTaskList = () =>
  fetch(`${BASE_URL}/task`, {
    method: "get",
    headers: new Headers({
      Authorization: TOKEN,
    }),
  }).then((response) => response.json());

const getTaskById = (id) =>
  fetch(`${BASE_URL}/task/${id}`, {
    method: "get",
    headers: new Headers({
      Authorization: TOKEN,
    }),
  }).then((response) => response.json());

const createTask = (data) =>
  fetch(`${BASE_URL}/task`, {
    body: JSON.stringify(data),
    method: "post",
    headers: new Headers({
      Authorization: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  }).then((response) => response.json());

const editTask = (data, id) =>
  fetch(`${BASE_URL}/task/${id}`, {
    body: JSON.stringify(data),
    method: "put",
    headers: new Headers({
      Authorization: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  }).then((response) => response.json());

  const deleteTask = (id) => 
  fetch(`${BASE_URL}/task/${id}`,{
    method:"delete",
    headers: new Headers({
      Authorization: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  }).then((response) => response.json());

export { getTaskList, getTaskById, createTask, editTask, deleteTask };
