import React, { Component } from 'react'

export default class StarShips extends Component {
  render() {
    return (
      <div className="starship-card">
        <div className="card-front">
          <h2>{starship.name}</h2>
        </div>
        <div className="card-back">
        </div>
      </div>
    )
  }
}