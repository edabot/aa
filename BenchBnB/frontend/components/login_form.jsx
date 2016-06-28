const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const LoginStore = React.createClass({
  getInitialState(){
    return({
      username: "",
      password: ""
    });
  },

  componentDidMount(){
    SessionStore.addListener(this.checkIfLoggedIn);
  },

  checkIfLoggedIn(){
    debugger
    if (SessionStore.isUserLoggedIn()) {
      debugger
      this.context.router.push("/");
    }
  },

  _handleSubmit(){
    SessionActions.login({
      username: this.state.username,
      password: this.state.password
    });
  },

  _handleUsernameChange(e){
    this.setState({username: e.target.value});
  },

  _handlePasswordChange(e){
    this.setState({password: e.target.value});
  },
  render(){
    return(
      <div>
        <form>
          <label>Username:
          <input id="user[username]"
            onChange={this._handleUsernameChange}
            value={this.state.username} /></label>
          <br />

          <label>Password:
          <input id="user[password]"
            onChange={this._handlePasswordChange}
            value={this.state.password} type="password" /></label>
          <br />

          <button onClick={this._handleSubmit}>login</button>

        </form>

      </div>
    );
  }
});

module.exports = LoginStore;
