const STORAGE_KEY = "TODO_APPS";

let todos = [];

function isStorageExist() /* boolean */ {
  if (typeof Storage === undifiend) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }

  return true;
}

function saveData() {
  const parsed = JSON.stringify(todos);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event("ondatasave"));
}

function loadDataFromStorage() {
  const serializeData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializeData);

  if (data !== null) {
    todos = data;
  }

  document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
  if (isStorageExist()) {
    saveData();
  }
}

function composeTodoObect(task, timestamp, isCompleted) {
  return {
    id: +new Date(),
    task,
    timestamp,
    isCompleted,
  };
}

function findTodo(todoId) {
  for (todo of todos) {
    if (todo.id === todoId) {
      return todo;
    }
  }

  return null;
}

function findTodoIndex(todoId) {
  let index = 0;
  for (todo of todos) {
    if (todo.id === todoId) {
      return index;
    }

    index++;
  }

  return -1;
}
