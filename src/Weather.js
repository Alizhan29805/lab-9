import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
        <div>
          {this.props.city &&
          <div>
            <p>Place: {this.props.city}, {this.props.country}</p>
            <p>Temperature: {this.props.temp} C°</p>
            <p>Wind: {this.props.wind} m/s</p>
          </div>
          }
          <p>{this.props.error}</p>
        </div>
        )
  }
}