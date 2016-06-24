var React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  getStateFromStore(){
    this.setState({ benches: BenchStore.all() });
  },
  componentDidMount(){
    this.benchListener = BenchStore.addListener(this.getStateFromStore);
  },
  render(){
    return(
      <div>
        {
          Object.keys(this.state.benches).map((benchKey) => {
            return <BenchIndexItem key={benchKey}
                                bench={this.state.benches[benchKey]} />;
          })
        }
      </div>
    );
  }
});

module.exports = BenchIndex;
