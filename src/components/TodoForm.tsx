import { Button, TextInput } from "flowbite-react";

import { useState } from "react";
import { addMutationTask } from "../query/useMutation";

export function TodoForm() {
  const [todoList, setTodoList] = useState("");

  const { mutate, isPending } = addMutationTask();

  let ResetFunction = () => {
    setTodoList("");
  };

  const handleTodoListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let dataConstruction = {
      title: todoList,
      status: false,
    };
    mutate(dataConstruction, {
      onSuccess: () => ResetFunction(),
    });
  };
  return (
    <form
      className="flex items-center  flex-col gap-4 justify-center"
      onSubmit={(e) => handleTodoListSubmit(e)}
    >
      <div className="md:w-2xl w-[200px]">
        <TextInput
          onChange={(e) => setTodoList(e.target.value)}
          value={todoList}
          id="todo-title"
          type="text"
          placeholder="todo-title"
          required
        />
      </div>
      {!isPending ? (
        <Button
          className="md:w-2xl w-[200px]"
          type="submit"
          disabled={isPending}
        >
          Submit
        </Button>
      ) : (
        <Button
          className="md:w-2xl w-[200px]"
          type="button"
          disabled={isPending}
        >
          Submitting
        </Button>
      )}
    </form>
  );
}
