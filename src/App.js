import React from "react";
import './App.css';

class Welcome extends React.Component {
  person = {
    fullName: "Sara White",
    bio: "My bio",
    imgSrc: "",
    profession: "Developper",
  };

  state = {
    shows: true,
    time: 0
  };



  handleClick = () => {
    this.setState({time: 0}) ;

    this.setState({ shows: !this.state.shows })
    setInterval(() => {
     this.setState({time: this.state.time + 1}) ;
    }, 1000);

    //clearInterval(interval)
  }

  handleClick1 = () => {
    this.setState({time: 0}) ;

    this.setState({ shows: !this.state.shows })
    setInterval(() => {
     this.setState({time: this.state.time + 1}) ;
    }, 1000);

    
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        {this.state.shows && <div>
          <h1>Full Name: </h1>
          <h2>{this.person.fullName}</h2>
          <h1>Bio:</h1>
          <h2>{this.person.fullName}</h2>
          <h1>profession:</h1>
          <h2>{this.person.fullName}</h2>
        </div>}

        {this.state.shows ? <button onClick={this.handleClick} style={{ height: 50, width: 100 }}>Hide</button> : <button onClick={this.handleClick1} style={{ height: 50, width: 100 }}>Show</button>}
        
        <h3>Time {this.state.time} second</h3>

      </div>)
  }
}
export default Welcome;