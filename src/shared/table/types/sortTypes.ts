export enum SortDirection {
  Ascending = 'ASC',
  Descending = 'DSC',
  None = '',
}

export type TableSort = { column: string, direction: SortDirection };
