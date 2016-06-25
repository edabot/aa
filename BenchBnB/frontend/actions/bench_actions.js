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
  }
};

module.exports = BenchActions;