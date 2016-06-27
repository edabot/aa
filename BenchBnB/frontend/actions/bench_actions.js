const BenchApiUtil = require('../util/bench_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches(bounds){
    BenchApiUtil.fetchAllBenches(bounds, BenchActions.receiveAllBenches);
  },
  receiveAllBenches(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench(bench){
    BenchApiUtil.createBench(bench, this.receiveBench);
  },
  receiveBench(bench){
    console.log(bench);
  }
};

module.exports = BenchActions;
