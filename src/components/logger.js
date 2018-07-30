import React from 'react';

export default function WithLogger(WrappedComponent) {
  return class extends React.Component {
    render() {
      console.log('PROPS:', this.props);
      return <WrappedComponent {...this.props} />
    } 
  }
}
