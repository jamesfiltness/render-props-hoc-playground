import React from 'react';

export default class Stories extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Stories</h3>
      <ul>
        {this.props.data.map((postData, i) => {
          return (
            <li key={i}>{postData.title}</li>
          ) 
        })}
      </ul>
     </React.Fragment>
    )
  }
}