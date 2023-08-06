import React from "react";
import TodoList from "./components/TodoList";

//Appコンポーネントにreactファンクションコンポーネント型付け
const App: React.FC = () => {
  const todos = [{ id: "t1", text: "OKOKOKOKOOKOKOKOKOKOKOKOIKO" }];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};

export default App;
