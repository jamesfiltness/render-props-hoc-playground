import React from 'react';

export default function WithSpinner(WrappedComponent) {
  return class extends React.Component {
    render() {
      return this.props.loading ? 
        <p>LOADING...</p> : 
        <WrappedComponent {...this.props} />
    }
  }
}