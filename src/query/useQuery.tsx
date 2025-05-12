import { useQuery } from "@tanstack/react-query";
import { getAllTask } from "../api/taskApi";

export const useTaskInfoQuery = () => {
  return useQuery({
    queryKey: ["taskInfo"],
    queryFn: async () => {
      return getAllTask();
    },
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });
};
