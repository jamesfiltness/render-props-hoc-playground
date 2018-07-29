## React Render Props playground

Experimenting with using Render Props to share code between components and how this differs from using HOC:

Using Render Props: 

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

Using HOC:

```
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
```

