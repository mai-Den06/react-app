import { useState } from "react";
import "../App.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
        >
          <option value="">--選択--</option>
          <option value="原神">原神</option>
          <option value="崩壊SR">崩壊SR</option>
          <option value="ZZZ">ZZZ</option>
          <option value="シャドバ">シャドバ</option>
        </select>
        <button onClick={handleAdd}>追加</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} task={todo} game={selectedGame} />
        ))}
      </div>
    </>
  );
}

export default TodoList;

type TodoProps = {
  task: string;
  game?: string;
};

function Todo({ task, game }: TodoProps) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>{task}</span>
      {game && <span className="game-label">[{game}]</span>}
      <button>削除</button>
    </div>
  );
}
