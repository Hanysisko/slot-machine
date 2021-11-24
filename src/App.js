import React, { Component } from 'react';
import { SquaresGrid } from './components/SquaresGrid/SquaresGrid.component.jsx';
import { PlayInput } from './components/PlayInput/PlayInput.component.jsx';
import { MyStats } from './components/MyStats/MyStats.component.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //SET YOUR START MONEY AND WIN MULTIPLIER
      wallet: 100,
      winMultiplier: 3,

      colors: ['#666','#666','#666'],
      bidInput: '',
      gameHistory: [],

      lastGameScore: 'Good luck!',
      gameScore: [0,0,0]
    }
  }


  //loading bid into state
  handleChange = (e) => {
    this.setState({ bidInput : e.target.value });
  }


  //checking if player can still play
  checkCanPlay = (value) => {
    if(this.state.wallet >= value) return true;
    return false;
  }

  //spin the wheel, yay!
  drawResult = () => {
    let options = ['darkred', 'darkblue', 'darkgreen'];
    let colorsNew = [];
    for(var i=0; i<=options.length-1; i++){
      colorsNew.push(options[Math.floor(Math.random() * 3)]);
    };
    return colorsNew;
  }


  //checking if we meet win conditions
  checkWin(draw){
    if((draw[0] === draw[1] && draw[1] === draw[2])||(draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0])) return true;
    else return false;
  }

  //adding last game result to gameHistory
  addGameToStats(win, bid) {
    let gameResult = {
      win: win,
      bid: bid
    }

    this.state.gameHistory.push(gameResult);
  }


  //changing wallet; with additional error protection
  changeWallet = (value, type = "+") => {
    if(typeof value === "number" && !isNaN(value)){
      let walletValue = this.state.wallet;
      if(type === "+"){
        return this.setState({wallet: walletValue += value});
      } else if (type === "-"){
        return this.setState({wallet: walletValue -= value})
      } else {
        throw new Error("u stupid - wrong type")
      }

    } else {

      console.log(typeof value);
      throw new Error("u stupid - dis not a number");
    };

  }


  //how much did we won from our bid
  moneyWonInGame(result, bid) {
    const winMultiplier = this.state.winMultiplier;
    if (result) return (winMultiplier * bid);
    else return 0;
  }


  //checking how many times we play/won/lost
  showGameStats = () => {
    let games = this.state.gameHistory.length;
    let wins = this.state.gameHistory.filter(result => result.win).length;
    let losses = this.state.gameHistory.filter(result => !result.win).length;
    
    this.setState({gameScore:[games,wins,losses]});
  }


  //last game result in form of small message
  showLastGameStats = () => {
    if(this.state.gameHistory.at(-1).win) {
      this.setState({lastGameScore:`You won ${this.moneyWonInGame(this.state.gameHistory.at(-1).win,this.state.gameHistory.at(-1).bid)} $!`})
    } else {
      this.setState({lastGameScore:`You lost ${this.state.gameHistory.at(-1).bid} $ :(`})
    }
  }

  
  // MAIN FUNCTION - 'GAME ENGINE'
  startGame = () => {
    
    //error protection - check if (bid > 1) || (bid <= wallet)
    if(this.state.bidInput < 1) return alert("bruh, that ain't even money");
    const bid = Math.floor(this.state.bidInput);
    if(!this.checkCanPlay(bid)) return alert('nah, u broke');

    //game 'spins' and saves results
    const colorsCurrentGame = this.drawResult();
    this.addGameToStats(this.checkWin(colorsCurrentGame), this.state.bidInput);

    //changing wallet
    if(this.checkWin(colorsCurrentGame)){
      this.changeWallet(this.moneyWonInGame(this.state.gameHistory.at(-1).win, this.state.gameHistory.at(-1).bid),"+")
    } else {
      this.changeWallet(bid,"-")
    };

    //rendering colors and stats
    this.setState({colors:colorsCurrentGame});
    this.showLastGameStats();
    this.showGameStats();
  }

  
  render() {

    return (
      <div className="App">
        
        <h1>SLOT MACHINE</h1>
        <p>You win when you see 1 color or all 3 colors. Bet how much you want and play!</p>

        <SquaresGrid
          colorsprop={this.state.colors}
        />

        <PlayInput
          inputprop = {this.handleChange}
          buttonprop = {this.startGame}
        />

        <MyStats 
          walletprop={this.state.wallet}
          lastgamescoreprop={this.state.lastGameScore}
          statsprop={this.state.gameScore}
        />

      </div>
    );
  }
}

export default App;