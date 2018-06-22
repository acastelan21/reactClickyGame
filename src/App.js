import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  state ={
    cards
  };
  render(){
    return (
      <Wrapper>
        <Header> Clicky Game </Header>
        {this.state.cards.map(cards =>(
          <Card
          id={cards.id}
          key={cards.id}
          image={cards.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
