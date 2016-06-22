"use strict";

const AppDispatcher = require('../dispatcher');

module.exports = {
  increment: function () {
    AppDispatcher.dispatch({
      actionType: "INCREMENT",
    });
  }
}
