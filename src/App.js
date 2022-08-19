import "./App.css";
import React from "react";
import TaskList from "./pages/task_list";
import { Route, Routes } from "react-router-dom";
import TaskDetail from "./pages/task_detail";
import CreateTask from "./pages/create_task";
import EditTask from "./pages/edit_task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="detail/:id" element={<TaskDetail/>} />
        <Route path="create-task" element={<CreateTask/>}/>
        <Route path="edit-task/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}

/*class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   return null
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.name === "Pablo") {
  //     return false
  //   }
  //   return true
  // }

  componentDidMount() {
    // request al backend
    setTimeout(() => {
      this.setState({
        name: "Pablo",
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Ya se actualizo nuestro componente! ");
  }

  // componentWillUnmount() {
  //   console.log('Will unmount')
  // }

  render() {
    return (
      <React.Fragment>
        <Title text={this.state.name} />
        <Form />
      </React.Fragment>
    );
  }
}*/

export default App;
