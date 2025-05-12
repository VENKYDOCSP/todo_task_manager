export interface Task {
  id?: string;
  title: string;
  status: boolean;
}

export type filterType = "all" | "completed" | "pending";

export interface FilterState {
  value: filterType;
}
