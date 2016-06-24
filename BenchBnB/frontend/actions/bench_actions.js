const BenchApiUtil = require('../util/bench_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches(){
    BenchApiUtil.fetchAllBenches(this.receiveAllBenches);
  },
  receiveAllBenches(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = BenchActions;
