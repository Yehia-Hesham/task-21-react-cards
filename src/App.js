import React, {Component} from 'react';
import People from './components/People'
import './App.css';


class App extends Component {

  render() {
    // console.log(this.state.people)
    return (
      <div>
        <h2>People</h2>
        <People/>
      </div>
    );
  }
}

export default App;
