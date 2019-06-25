import React, { Component } from 'react';
import CardList from './cardList';

import './App.css';

class App extends Component {
  state = {
    userData: []
  }

  async componentDidMount(){
    const response = await fetch('https://randomuser.me/api/?results=8');
    const data = await response.json();
    
    this.setState({
      userData: data.results
    });
  }

  render(){
    const { userData } = this.state;
    return (
      <div className="App">
        <CardList userData={userData}/>
      </div>
    );
  }
}

export default App;
