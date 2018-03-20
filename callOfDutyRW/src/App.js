import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

const header = (
  <header className="App-header">
    <h1 className="App-title">Call of duty RW</h1>
  </header>
);

class App extends Component {
  state = {
    ammo: {
      pistolAmmo: 0
    },
    gun: {
      name: 'Glock',
      ammoMax: 20,
      ammoCurrent: 5
    },
    enemy: {
      health: 80
    },
    ammoFound: Math.floor(Math.random() * 3)
  }; 

  shot = () => {
    const { gun } = this.state
    gun.ammoCurrent > 0 ?
      this.setState(prevState => {
        return ({
          gun: { ...prevState.gun, ammoCurrent: prevState.gun.ammoCurrent - 1 }
        })
      })
      : alert('reload');
  }

  reload = () => {
    const { ammo, gun } = this.state
    
      ammo.pistolAmmo > 0 ?
      this.setState(prevState => {
        return ({ 
          ammoCurrent: prevState.gun.ammoCurrent = prevState.ammo.pistolAmmo,
          pistolAmmo: prevState.ammo.pistolAmmo -= prevState.gun.ammoMax,
          pistolAmmo: prevState.ammo.pistolAmmo < 0 ? prevState.ammo.pistolAmmo = 0 : prevState.ammo.pistolAmmo = prevState.ammo.pistolAmmo,
          ammoCurrent: prevState.gun.ammoCurrent > 20 ? prevState.gun.ammoCurrent = 20 : prevState.gun.ammoCurrent = prevState.gun.ammoCurrent
        }) 
      })
    : alert('find ammo');
  }

  pickUpAmmo = () => {
    const { ammo, ammoFound } = this.state
    this.setState(prevState => {
        return ({
          ammo: { ...prevState.ammo, pistolAmmo: prevState.ammo.pistolAmmo + ammoFound },
          ammoFound: prevState.ammoFound = Math.floor(Math.random() * 3)
      })
    })
  }

  doDamage = () => {
    const { enemy } = this.state
    enemy.health > 0 ?
    this.setState(prevState => {
       return ({ 
         enemy: { ...prevState.enemy, health: prevState.enemy.health -= 10 }
       })
    }) : alert('enemy is dead')
    console.log(enemy.health);
  }

  render() {
    const { gun, ammo, enemy } = this.state
    return (
      <div className="App"> {header}
        <h2>Name: {gun.name}</h2>
        <h4>Ammo: {gun.ammoCurrent} / {ammo.pistolAmmo}</h4>
        <button onClick={this.reload}>Change magazine</button>
        <button onClick={this.pickUpAmmo}>look for ammo</button>
        <div className="gameField" onClick={this.shot}>
          <div className="enemy">
            <div className="enemyBody" onClick={this.doDamage}></div>
            <div className="enemyHealth" style={{width: enemy.health}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;