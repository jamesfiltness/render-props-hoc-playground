import React from 'react';

export default class Weather extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Weather</h3>
        <p>Temp: {this.props.data.temp}</p>
      </React.Fragment>
    )
  }
}