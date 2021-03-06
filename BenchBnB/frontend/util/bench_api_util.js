const BenchApiUtil = {
  fetchAllBenches(bounds, callback) {
    $.ajax({
      url: '/api/benches',
      dataType: 'json',
      data: bounds,
      success: function(resp) {
        callback(resp);
      }
    });
  },
  createBench(bench, callback) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      type: 'POST',
      data: {bench: bench},
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

module.exports = BenchApiUtil;
