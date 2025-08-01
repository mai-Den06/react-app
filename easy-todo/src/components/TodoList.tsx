import { useState } from "react";
import "../App.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>追加</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} task={todo} />
        ))}
      </div>
    </>
  );
}

export default TodoList;

type TodoProps = {
  task: string;
};

function Todo({ task }: TodoProps) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>{task}</span>
      <button>削除</button>
    </div>
  );
}
