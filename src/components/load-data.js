import React from 'react';

export default class LoadData extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }
  
  fetchData = (uri) => {
    fetch(uri)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
    })
    .catch((error) => {
      setTimeout(() => {
        this.setState({
          error: error,
          loading: false,
        });
      }, 500);
    })
  }
  
  componentDidMount() {
    this.setState({
      loading: true,
    });
    
    this.fetchData(this.props.uri);
  }

  render(){
    return (
      <React.Fragment>
        {this.props.children({...this.state})}
      </React.Fragment>
    )
  }
}