const ApiUtil = {
  fetchAllPokemons: function(callback) {
    $.ajax({
      url: "/api/pokemon",
      dataType: "json",
      success: function(resp) {
        callback(resp);
      }
    });
  },
  fetchPokemon: function(id, callback) {
    $.ajax({
      url: "/api/pokemon/" + id,
      dataType: "json",
      success: function(resp) {
        callback(resp);
      }
    });
  },
  newPokemon: function(pokemon, cb) {
    debugger
    $.ajax({
      type: "POST",
      url:"api/pokemon",
      dataType: "json",
      data: pokemon,
      success: function(resp) {
        cb(resp.id);
      }
    });
  }
};

module.exports = ApiUtil;
