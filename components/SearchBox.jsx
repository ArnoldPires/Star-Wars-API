import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <input type="text" placeholder="Search Starships" onChange={(e) => handleSearch(e.target.value)} />
      </div>
    )
  }
}