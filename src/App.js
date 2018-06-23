import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  state ={
    cards,
    score: 0,
    highscore:0
  };
//function  when game adds
  //update score
  //resent card count 
  //alert  of game over with score (change to modal if time)
  gameOver= () => {
    if(this.state.score >this.state.highscore){
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore)
      });
    }
    this.state.cards.forEach( card=> {
      card.count = 0;
      
    });
    alert(`Game Over :(\nscore: ${this.state.score}`); 
    this.setState({score:0});
    return true;
  }

        
    
//function to handleclickcounts
// if card clickcount is 0 add 1 and then shuffle 
  //if clickount is not zero run game over 
  handleClick = id => {
    // eslint-disable-next-line
    this.state.cards.find((clicked, i) => {
      if (clicked.id === id){
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1; 
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score); 

          }); 

          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
      
    });
  }
  
  render(){
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}> Clicky Game </Header>
        {this.state.cards.map(cards => (
          <Card
          handleClick={this.handleClick}
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
