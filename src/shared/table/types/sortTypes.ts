export enum SortDirection {
  Ascending = 'ASC',
  Descending = 'DSC',
  None = '',
}

export type SortResult = { column: string, direction: SortDirection };
