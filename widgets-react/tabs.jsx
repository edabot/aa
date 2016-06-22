const React = require('react');

const Tabs = React.createClass({
  getInitialState(){
    return { index: 0 };
  },
  selectTab(index){
    this.setState({index: index});
  },
  render () {
    let self = this;
    const tabTitles = this.props.tabItems.map(function(tabItem, index) {
      return (
        <h1 onClick={self.selectTab.bind(self, index)}
            key={tabItem.title}>
          {tabItem.title}
        </h1>
      );
    });

    return (
      <div>
        <header>
          <ul>
            {tabTitles}
          </ul>
        </header>

        <article>
          { this.props.tabItems[this.state.index].content }
        </article>
      </div>
    );
  }
});


module.exports = Tabs;
