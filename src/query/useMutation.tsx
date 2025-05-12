import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddSingleTask,
  DeleteSingleTask,
  EditSingleTask,
} from "../api/taskApi";
import type { Task } from "../type/TodoTaskType";
import toast from "react-hot-toast";

export const deleteMutationTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async (id: string) => {
      return await DeleteSingleTask(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskInfo"] });
      toast.success("Task deleted successfully");
    },
  });
};

export const editMutationTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["editTask"],
    mutationFn: async ({ id, task }: { id: string; task: Task }) => {
      return await EditSingleTask(id, task);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskInfo"] });
      // toast.success("Task edited successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export const addMutationTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (task: Task) => {
      return await AddSingleTask(task);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskInfo"] });
      toast.success("Task added successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};
