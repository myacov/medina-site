import React, { Component } from "react";


class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.countapi.xyz/update/yacov-site.herokuapp.com/visitss/?amount=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            counts: result.value
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, counts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row">
            <div className="three columns">
                   
                   </div>
            <div className="eight columns main-col">
                <h4>This page was viewed {counts} times</h4> 
            </div>
        </div>
           
           

        
      );
    }
  }
}

export default Counter;