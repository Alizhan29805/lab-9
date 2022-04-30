import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
        <form onSubmit={this.props.weatherMethod}>
            <input type="text" name='city'></input>
            <button>Weather</button>
        </form>
        )
  }
}
