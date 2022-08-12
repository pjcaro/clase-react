import "./App.css";
import React from "react";
import TaskList from "./pages/task_list";

 function App() {
  return (
    <div className="App">
      <TaskList/>
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
