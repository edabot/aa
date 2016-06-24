/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	//we need to provide a center coordinate for our map, this is SF

	var mapCenter = { lat: 37.7758, lng: -122.435 },

	//I made some lat/lng points for some good burrito spots
	burritos = [{ lat: 37.775785, lng: -122.445979, name: "Papalote" }, { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" }, { lat: 37.781899, lng: -122.410426, name: "Cancun" }];

	//just a normal react component class :)
	var Map = React.createClass({
	  displayName: "Map",
	  componentDidMount: function componentDidMount() {
	    //React.findDOMNode gets us a pointer to the actual html DOM element,
	    //not its React component class instance, this is what
	    //google maps wants to render the map into
	    //this.refs is an object populated by giving children a 'ref' prop
	    //when we render
	    var map = React.findDOMNode(this.refs.map),

	    //we make these options so when the map loads up it displays a
	    //good location and zoom level, zoom of 13 show most of SF
	    options = {
	      center: this.props.center,
	      zoom: 13
	    };
	    //this line actually creates the map and renders it into the DOM
	    this.map = new google.maps.Map(map, options);
	    //add a movement listener
	    this.listenForMove();
	    //we are going to add a map marker for each burrito place now
	    this.props.burritoPlaces.forEach(this.addBurritoPlace);
	  },
	  addBurritoPlace: function addBurritoPlace(burritoPlace) {
	    //we make an instance of the google maps LatLng class, args are
	    //(lat, lng)
	    var pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng),

	    //then we use our new instance of LatLng to make a marker
	    marker = new google.maps.Marker({
	      position: pos,
	      //set map to this.map, this is what adds it to the map
	      //when we want to remove this marker, we need to set its
	      //map property to null using myMarker.setMap(null)
	      map: this.map
	    });
	    marker.addListener('click', function () {
	      //when the marker is clicked on, alert the name
	      alert("clicked on: " + burritoPlace.name);
	    });
	  },
	  listenForMove: function listenForMove() {
	    var _this = this;

	    //we listen for the map to emit an 'idle' event, it does this when
	    //the map stops moving
	    google.maps.event.addListener(this.map, 'idle', function () {
	      var bounds = _this.map.getBounds();
	      alert('map has moved, check console to see updated bounds');
	      console.log('center');
	      console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
	      console.log("north east");
	      console.log(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
	      console.log("south west");
	      console.log(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
	    });
	  },
	  render: function render() {
	    //the div that will become the map is just an empty div
	    //we give it a 'ref' so we can easily get a pointer to the
	    //actual dom node up in componentDidMount
	    //DO NOT FORGET: you must style your map div and give it width + height
	    //or else it won't be visible!
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "span",
	        null,
	        "MAP DEMO"
	      ),
	      React.createElement("div", { id: "map", ref: "map" }),
	      React.createElement(
	        "p",
	        null,
	        "Hey! Here are a few good burrito places in SF. Click on them to find their name. Move the map and check the console to see the new boundaries of the displayed map."
	      )
	    );
	  }
	});
	React.render(React.createElement(Map, { center: mapCenter, burritoPlaces: burritos }), document.getElementById('root'));

/***/ }
/******/ ]);