import React from 'react';
import LoadData from './load-data';
import Logger from './logger';
import Error from './error';
import Spinner from './spinner';

export default class Widget extends React.Component {  
  render() {
    const { endpoint } = this.props;
    
    return (
      <div className="widget">
        <LoadData uri={this.props.endpoint}>
          {({ loading, data, error }) =>
            <Logger data={data}>
              {() =>
                <Error error={error}>
                  { () => 
                    <Spinner loading={loading}>  
                      { () => 
                        this.props.children({ data: data })
                      }
                    </Spinner>
                  }
                </Error>
              }
            </Logger>
          }
        </LoadData>  
      </div>
    );
  }
}