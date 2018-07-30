import React from 'react';

export default function WithLoadData(WrappedComponent) {
  return class extends React.Component {
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
        setTimeout(() => {         
          this.setState({
            data: data,
            loading: false,
          });
        }, 500);  
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
  
      this.fetchData(this.props.endpoint);
    }

    render(){
      return (
        <WrappedComponent {...this.state} {...this.props} />
      )
    }
  }
}