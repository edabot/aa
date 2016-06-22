let _callbacks = [];
let _todos = [];

const TodoStore = {
  changed() {
    _callbacks.forEach(callback => callback());
  },
  addChangedHandler(callback){
    _callbacks.push(callback);
  },
  removeChangeHandler(callback){
    let index = _callbacks.indexOf(callback);
    _callbacks.splice(index, 1);
  },
  all(){
    return _todos.slice();
  },
  fetch(){
    $.ajax({
      url:"api/todos",
      dataType: "json",
      success: function(resp) {
        _todos = resp;
        TodoStore.changed();
      }
    });
  },
  create(todo){
    $.ajax({
      url:"api/todos",
      dataType: "json",
      type: "POST",
      data: todo,
      success: function(resp) {
        _todos.push(resp);
        TodoStore.changed();
      }
    });
  },
  destroy(id){
    let index;
    if(_todos.some((todo, idx) => {
      index = idx;
      return todo.id === id;
    })) {
      $.ajax({
        url:"api/todos/" + id,
        dataType: "json",
        type: "DELETE",
        success: function(resp) {
          _todos.splice(index, 1);
          TodoStore.changed();
        }
      });
    }
  },

  toggleDone(id) {
    let index;
    _todos.some((todo, idx) => {
      index = idx;
      return todo.id === id;
    });
    $.ajax({
      url:"api/todos/" + id,
      dataType: "json",
      type: "PATCH",
      data: { "todo[done]": (!_todos[index].done) },
      success: function(resp) {
        _todos[index].done = !_todos[index].done;
        TodoStore.changed();
      }
    });

  }


};

module.exports = TodoStore;
