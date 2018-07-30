import React from 'react';
import WithLoadData from './load-data';
import WithLogger from './logger';
import WithError from './error';
import WithSpinner from './spinner';

class Widget extends React.Component {  
  render() {
    return (
      <div className="widget">
        {this.props.children({ data: this.props.data })}
      </div>
    );
  }
}

// Use a compose function
export default WithLogger(
  WithLoadData(
    WithSpinner(
      WithError(
        Widget
      )
    )
  )
);