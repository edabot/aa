const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.benchListener = BenchStore.addListener(this.getStateFromStore);
    this.listenForMove();
  },
  getStateFromStore(){
    this.setState({ benches: BenchStore.all() });
    Object.keys(this.state.benches).forEach(key => {
      this.addBench(this.state.benches[key]);
    });
  },
  addBench(bench){
    const pos = new google.maps.LatLng(bench.lat, bench.lng),
                marker = new google.maps.Marker({
                  position: pos,
                  map: this.map
                });
    marker.addListener('click', () => {
      alert(`clicked on: ${bench.description}`);
    });
  },
  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      console.log('center');
      console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
      console.log("north east");
      console.log(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
      console.log("south west");
      console.log(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
      BenchActions.fetchAllBenches();
    });
  },
  render(){
    return(
      <div>
        <div className='map' ref='map' />
      </div>
    );
  }
});

module.exports = BenchMap;
