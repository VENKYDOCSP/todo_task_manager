import { TodoForm } from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
