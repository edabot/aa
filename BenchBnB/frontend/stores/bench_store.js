const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchStore = new Store(Dispatcher);

let _benches = {},
    _oldBenches = {},
    _newBenches = {};

BenchStore.uniqueBenches = function(groupA, groupB) {
  let result =  Object.keys(groupA).map(key => {
    if (!Object.keys(groupB).includes(key)) { return groupA[key]; }
  });
  return result.filter(obj => obj !== undefined);
};

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

BenchStore.newBenches = function(){
  return Object.assign({}, _newBenches);
};

BenchStore.oldBenches = function(){
  return Object.assign({}, _oldBenches);
};

BenchStore.addBench = function(bench){
  _benches[bench.id] = bench;
};

BenchStore.resetAllBenches = function(benches) {
  _oldBenches = BenchStore.uniqueBenches(_benches, benches);
  _newBenches = BenchStore.uniqueBenches(benches, _benches);
  _benches = benches;
  BenchStore.__emitChange();
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case BenchConstants.BENCHES_RECEIVED:
    BenchStore.resetAllBenches(payload.benches);
    BenchStore.__emitChange();
    break;
  case BenchConstants.BENCH_RECEIVED:
    BenchStore.addBench(payload.bench);
    BenchStore.__emitChange();
    break;
  }
};

module.exports = BenchStore;
