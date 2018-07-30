import React from 'react';

export default function WithError(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { error } = this.props;
      
      return error ? 
        <p>{error.message || 'Something went wrong'}</p> : 
        <WrappedComponent {...this.props} />
    } 
  }
}