const BenchApiUtil = {
  fetchAllBenches(callback) {
    $.ajax({
      url: '/api/benches',
      dataType: 'json',
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

module.exports = BenchApiUtil;
