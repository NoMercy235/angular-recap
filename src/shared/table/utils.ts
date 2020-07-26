import { SortDirection } from "./types";

export const getNextDirection = (currentDirection: SortDirection): SortDirection => {
  switch (currentDirection) {
    case SortDirection.None:
      return SortDirection.Ascending;
    case SortDirection.Ascending:
      return SortDirection.Descending;
    case SortDirection.Descending:
      return SortDirection.None;
  }
}
