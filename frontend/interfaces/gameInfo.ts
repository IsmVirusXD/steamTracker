export type StatusGame =
  | "-"
  | "Finished"
  | "100%"
  | "All Achievements"
  | "Completed"
  | "None";

export interface gameInfo {
  id: string;
  name: string;
  totalTime: number;
  formatTime: string;
  status: StatusGame;
}
