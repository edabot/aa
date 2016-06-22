"use strict";
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher');

let _clickCount = 0;

const ClickStore = new Store(AppDispatcher);

ClickStore.count = function () {
  return _clickCount;
};

ClickStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "INCREMENT":
      _clickCount++;
      ClickStore.__emitChange();
      break;
  }
};

module.exports = ClickStore;
