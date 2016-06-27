const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const hashHistory = require('react-router').hashHistory;

const _getCoordsObj = function(latLng) {
  return ({
    lat: latLng.lat(),
    lng: latLng.lng()
  });
};

const BenchMap = React.createClass({
  getInitialState(){
    return { newBenches: BenchStore.all(), oldBenches: [] };
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
    this.listenForClick();
  },
  getStateFromStore(){
    this.setState({ newBenches: BenchStore.all() });
    Object.keys(this.state.newBenches).forEach((key, i) => {
      this.addBench(this.state.newBenches[key]);
    });
  },
  addBench(bench){
    const pos = new google.maps.LatLng(bench.lat, bench.lng),
                marker = new google.maps.Marker({
                  position: pos,
                  map: this.map,
                });
    marker.addListener('click', () => {
      alert(`clicked on: ${bench.description}`);
    });
  },
  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds();
      const northEast = _getCoordsObj(mapBounds.getNorthEast());
      const southWest = _getCoordsObj(mapBounds.getSouthWest());

      const bounds = {bounds: { northEast, southWest }};
      BenchActions.fetchAllBenches(bounds);
    });
  },
  listenForClick() {
    google.maps.event.addListener(this.map, 'click', (e) => {
      let coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      hashHistory.push({
        pathname: "benches/new",
        query: coords
      });
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
