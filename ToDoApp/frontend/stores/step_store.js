let _callbacks = [];
let _steps = {};

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
  all(todoId){
    return _steps[todoId].slice();
  },
  fetch(todoId){
    $.ajax({
      url:"api/todos/" + todoId + "/steps",
      dataType: "json",
      success: function(resp) {
        _steps[todoId] = resp;
        TodoStore.changed();
      }
    });
  },
  create(step){
    $.ajax({
      url:"api/todos/" + step.todo_id + "/steps",
      dataType: "json",
      type: "POST",
      data: step,
      success: function(resp) {
        _steps[step.todo_id].push(resp);
        TodoStore.changed();
      }
    });
  },
  destroy(id){
    $.ajax({
      url:"api/steps/" + id,
      dataType: "json",
      type: "DELETE",
      success: function(resp) {
        _steps[resp.todo_id] = _steps[resp.todo_id].filter( step => {
          return step.id !== id;
        });
        TodoStore.changed();
      }
    });
  },

  toggleDone(id, todoId) {
    let currentStep;
    _steps[todoId].some(step => {
      currentStep = step;
      return step.id === id;
    });
    $.ajax({
      url:"api/steps/" + id,
      dataType: "json",
      type: "PATCH",
      data: { "step[done]": !currentStep.done },
      success: function(resp) {
        currentStep.done = !currentStep.done;
        TodoStore.changed();
      }
    });
  }
};

module.exports = TodoStore;
