import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { editMutationTask } from "../query/useMutation";
import { useTaskInfoQuery } from "../query/useQuery";
import type { filterType, Task } from "../type/TodoTaskType";
import { DeleteModal } from "./DeleteModal";
import { setFilter } from "../store/reducer/filterSlice";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { addTodo } from "../store/reducer/todosSlice";

const TodoList = () => {
  const { data } = useTaskInfoQuery();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();

  const filter = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (!data) return;
    if (filter.value === "all") {
      dispatch(addTodo(data));
    } else {
      const filteredData = data.filter(
        (item: Task) =>
          item.status === (filter.value === "completed" ? true : false)
      );
      dispatch(addTodo(filteredData));
    }
  }, [data, filter]);

  const todoInfo = useAppSelector((state) => state.todo);

  const { mutate } = editMutationTask();

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-start mt-2 ">Todo List Info </h3>
        <div>
          <select
            id="taskStatus"
            onClick={(e) => dispatch(setFilter(e.target.value as filterType))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="all" disabled>
              Status{" "}
            </option>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {todoInfo?.list?.map((item: Task, index: number) => (
        <div className="flex justify-between  items-center gap-1.5 mt-7 mb-1.5" key={index}>
          <input
            onChange={(e) => {
              mutate({
                id: item?.id ?? "",
                task: { ...item, status: e.target.checked },
              });
            }}
            checked={item?.status}
            id={`checked-checkbox_${index}`}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`checked-checkbox_${index}`}
            className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            {item.title}
          </label>
          <DeleteModal deleteTodo={item} />
        </div>
      ))}
    </>
  );
};

export default TodoList;
