import axios from "axios";
import type { Task } from "../type/TodoTaskType";

let REACT_API_URL =
  "https://6821b576259dad2655b04b42.mockapi.io/todo-task/todoresource";

export const getAllTask = async () => {
  const response = await axios.get(REACT_API_URL);
  return response?.data;
};

export const EditSingleTask = async (id: string, task: Task) => {
  const response = await axios.put(`${REACT_API_URL}/${id}`, task);
  return response?.data;
};

export const DeleteSingleTask = async (id: string) => {
  const response = await axios.delete(`${REACT_API_URL}/${id}`);
  return response?.data;
};

export const AddSingleTask = async (task: Task) => {
  const response = await axios.post(REACT_API_URL, task);
  return response?.data;
};
