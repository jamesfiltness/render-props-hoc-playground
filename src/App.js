import React from 'react';
import Widget from './components/widget';
import Stories from './components/stories';
import Weather from './components/weather';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Widget endpoint="https://jsonplaceholder.typicode.com/posts">
          { props => <Stories {...props} /> }
        </Widget>
        <Widget endpoint="https://demo2477700.mockable.io/test">
          { props => <Weather {...props} /> }
        </Widget>
      </React.Fragment>
    );
  }
}