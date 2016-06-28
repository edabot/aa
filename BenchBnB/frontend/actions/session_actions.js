const SessionApiUtil = require('../util/session_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user, SessionActions.receiveCurrentUser);
  },
  login(user){
    SessionApiUtil.login(user, SessionActions.receiveCurrentUser);
  },
  logout(){
    SessionApiUtil.delete(SessionActions.removeCurrentUser);
  },
  receiveCurrentUser(currentUser){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },
  removeCurrentUser(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
