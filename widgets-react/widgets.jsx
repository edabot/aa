const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./tabs');
const WeatherClock = require('./weather-clock');
const AutoComplete = require('./autocomplete');


var Widgets = React.createClass({
  getInitialState () {
    return { tabItems: [
      {title: "Home", content: "HomeContent"},
      {title: "Inbox", content: "InboxContent"},
      {title: "About", content: "AboutContent"},
      {title: "Notifications", content: "NotificationsContent"}
    ], names: [
      "Jack", "Jill", "Joseph", "Johanna", "Anna", "Paul", "Phil", "Mark",
      "John", "Jehosephat", "Jehovah", "Jesus", "Luke"
    ]};
  },
  render() {
    return(
      <div>
        <Tabs tabItems={this.state.tabItems}/>
        <WeatherClock />
        <AutoComplete names={this.state.names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets />, document.getElementById('widgets'));
});
