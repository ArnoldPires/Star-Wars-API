import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Star Wars API</h1>
      </header>
      <button className="generate-button">Generate StarShips</button>
    </div>
    )
  }
}
