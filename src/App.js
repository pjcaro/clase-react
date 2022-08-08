import logo from './logo.svg';
import './App.css';
import React from 'react';
import Title from './tittle';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }
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
        name: "Pablo"
      })
    }, 2000)
  }

  componentDidUpdate() {
    console.log('Ya se actualizo nuestro componente! ')
  }

  // componentWillUnmount() {
  //   console.log('Will unmount')
  // }

  render() {
    return (
      <div className="App">
        <Title text={this.state.name} />
      </div>
    )
  }
}

export default App;
