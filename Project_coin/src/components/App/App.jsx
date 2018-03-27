import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0 ,
      positionN: 128
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
      positionN: prevState.positionN += 128
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <div className="coin" style={{backgroundPosition: (0, this.state.positionN)}}></div>
        <div className="coin" style={{backgroundPosition: (0, this.state.positionN)}}></div>
      </div>
    );
  }
}

export default App
