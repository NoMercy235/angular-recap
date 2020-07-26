import { TGrid } from "./t-grid.component";
import { SortDirection } from "../types";
import { TColumn } from "../t-column/t-column.component";

describe('ArrowComponent', () => {
  it('should not initialize pagination if pageSize is not set', () => {
    const cmp = new TGrid();
    cmp.ngOnInit();
    expect(cmp.pagination).toBe(undefined);
  });

  it('should initialize pagination if pageSize is set', () => {
    const cmp = new TGrid();
    cmp.data = [1, 2, 3];
    cmp.pageSize = 10;
    cmp.ngOnInit();
    expect(cmp.pagination).toEqual({ page: 1, pageSize: 10, total: 3 });
  });

  it('should not change pagination if the data has not changed', () => {
    const cmp = new TGrid();
    cmp.data = [1, 2, 3];
    cmp.pageSize = 10;
    cmp.ngOnInit();
    cmp.ngOnChanges({});
    expect(cmp.pagination).toEqual({ page: 1, pageSize: 10, total: 3 });
  });

  it('should change pagination if the data has changed', () => {
    const cmp = new TGrid();
    const data = [1, 2, 3];
    cmp.data = data;
    cmp.pageSize = 10;
    cmp.ngOnInit();
    const currentPagination = cmp.pagination;
    cmp.ngOnChanges({ data: { previousValue: data, currentValue: [1, 2, 3, 4] } });
    expect(cmp.pagination).not.toBe(currentPagination);
  });

  it('should get the same data if there is no sorting', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    const result = cmp.getSortedData(data);
    expect(result).toEqual(data);
  });

  it('should get the sorted data if a sort is set', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    let result;

    cmp.sort = { column: 'id', direction: SortDirection.Ascending };
    result = cmp.getSortedData([...data]);
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);

    cmp.sort = { column: 'id', direction: SortDirection.Descending };
    result = cmp.getSortedData([...data]);
    expect(result).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);

    cmp.sort = { column: 'id', direction: SortDirection.None };
    result = cmp.getSortedData([...data]);
    expect(result).toEqual([{ id: 1 }, { id: 3 }, { id: 2 }]);
  });

  it('should get the same data if there is no pagination', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    const result = cmp.getPaginatedData(data);
    expect(result).toEqual(data);
  });

  it('should get paginated data if there is pagination set', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    let result;

    cmp.pagination = { pageSize: 2, total: 3, page: 1 };
    result = cmp.getPaginatedData([...data]);
    expect(result).toEqual([{ id: 1 }, { id: 3 }]);

    cmp.pagination = { pageSize: 2, total: 3, page: 2 };
    result = cmp.getPaginatedData([...data]);
    expect(result).toEqual([{ id: 2 }]);
  });

  it('should get the same data if no pagination and sort are set', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    cmp.data = data;
    const result = cmp.getData();
    expect(result).toEqual(data);
  });

  it('should get the correct data if there is a sort and no pagination', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    cmp.data = data;
    cmp.sort = { column: 'id', direction: SortDirection.Ascending };
    const result = cmp.getData();
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should get the correct data if there is a sort and a pagination', () => {
    const cmp = new TGrid();
    const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
    cmp.data = data;
    cmp.sort = { column: 'id', direction: SortDirection.Ascending };
    cmp.pagination = { pageSize: 2, total: 3, page: 1 };
    const result = cmp.getData();
    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should not allow sort if the whole table is unsortable', () => {
    const cmp = new TGrid();
    cmp.sortable = false;
    const result = cmp.isSortable(new TColumn<any>());
    expect(result).toEqual(false);
  });

  it('should not allow sort if the table is sortable but the column is not', () => {
    const cmp = new TGrid();
    const column = new TColumn<any>();
    column.sortable = false;
    cmp.sortable = true;
    const result = cmp.isSortable(column);
    expect(result).toEqual(false);
  });

  it('should allow sort if the table is sortable and the column is sortable', () => {
    const cmp = new TGrid();
    const column = new TColumn<any>();
    column.sortable = true;
    cmp.sortable = true;
    const result = cmp.isSortable(column);
    expect(result).toEqual(true);
  });

  it('should set the correct pagination', () => {
    const cmp = new TGrid();
    const pagination = { pageSize: 2, total: 3, page: 1 };
    cmp.setPagination(pagination);
    expect(cmp.pagination).toBe(pagination);
  });

  it('should emit the correct pagination', () => {
    const cmp = new TGrid();
    const pagination = { pageSize: 2, total: 3, page: 1 };
    cmp.setPagination(pagination);
    expect(cmp.pagination).toBe(pagination);
  });

  it('should emit the correct pagination', () => {
    const cmp = new TGrid();
    spyOn(cmp.paginationChange, 'emit');
    const pagination = { pageSize: 2, total: 3, page: 1 };
    cmp.onPaginationChange(pagination);
    expect(cmp.paginationChange.emit).toHaveBeenCalledWith(pagination);
    expect(cmp.pagination).toBe(pagination);
  });
});
