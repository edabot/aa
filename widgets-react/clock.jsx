const React = require('react');


const Clock = React.createClass({
  getInitialState(){
    return { time: new Date() };
  },
  componentDidMount(){
    console.log("Clock am mounted");
    this.intervalId = setInterval(this.tick, 500);
  },
  tick(){
    this.setState({time: new Date()});
  },
  componentWillUnmount (){
    clearInterval(this.intervalId);
  },
  render(){
    return (
        <div>{this.state.time.toTimeString().slice(0,8)}</div>
      );
  }
});

module.exports = Clock;
