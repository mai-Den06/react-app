import "../App.css";

function TodoList() {
  return (
    <>
      <div>
        <input type="text" />
        <button>追加</button>
      </div>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default TodoList;

function Todo() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>やること</span>
      <button>削除</button>
    </div>
  );
}
