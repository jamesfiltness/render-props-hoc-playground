import React from 'react';

export default class Spinner extends React.Component {
  render() {
    { 
      return this.props.loading ? 
        <p>LOADING...</p> : 
        this.props.children(); 
    }
  }
}