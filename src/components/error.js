import React from 'react';

export default class Error extends React.Component {
  render() {
    const { error } = this.props;
 
    { 
      return error ? 
        <p>{error.message || 'Something went wrong'}</p> : 
        this.props.children(); 
    }
  }
}