const SessionApiUtil = {
  signup(user, callback){
    $.ajax({
      url: '/api/session',
      type: "POST",
      dataType: 'json',
      data: {user: user},
      success: function(resp) {
        callback(resp);
      }
    });
  },
  login(user, callback){
    $.ajax({
      url: '/api/session',
      type: "POST",
      dataType: 'json',
      data: {user: user},
      success: function(resp) {
        callback(resp);
      }
    });
  },
  delete(callback){
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

module.exports = SessionApiUtil;
