import React from 'react';

export default class Logger extends React.Component {  
  render() {
    console.log('PROPS:', this.props);
    return this.props.children();
  } 
}
