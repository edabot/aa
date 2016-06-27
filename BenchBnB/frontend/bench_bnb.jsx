const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Search = require('./components/search');
const BenchForm = require('./components/bench_form');
const BenchApiUtil = require('./util/bench_api_util');

const App = React.createClass({
  render() {
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

const routes=(
  <Route path='/' component={App}>
    <IndexRoute component={Search} />
    <Route path='benches/new' component={BenchForm} />
  </Route>
);

window.BenchApiUtil= BenchApiUtil;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("content"));
});
