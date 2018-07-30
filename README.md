## React Render Props playground

Experimenting with using Render Props to share code between components:

```
// src/components/widget.js
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
```