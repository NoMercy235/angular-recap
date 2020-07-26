import { Component } from '@angular/core';
import { TablePagination } from "../shared/table/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-path';

  tableData = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
  ]
  pagination: TablePagination = {
    page: 1,
    pageSize: 3,
    total: 10,
  };

  addData = () => {
    this.tableData = [...this.tableData, { id: 3, name: 'test3' }]
  };

  onSortChange = (newSort) => {
    console.log(newSort);
  };
}
