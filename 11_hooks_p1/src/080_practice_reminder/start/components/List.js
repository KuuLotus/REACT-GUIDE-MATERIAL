import { useTodos } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo} todo={todo} />
      ))}
    </div>
  );
};

export default List;
