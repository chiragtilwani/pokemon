import React,{Component} from 'react'
import './App.css';
import Pokegame from './Pokegame'

class App extends Component {
  render() {

    return (
  
      <div className="App">
        <div className="App-container">
          <Pokegame />
        </div>
      </div>
    );
  }
}

export default App;
