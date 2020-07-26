import { Component } from '@angular/core';
import { User } from "../models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-path';

  tableData = new Array(50).fill(0).map(() => {
    return new User();
  });

  addData = () => {
    this.tableData = [...this.tableData, new User()];
  };

  onSortChange = (newSort) => {
    // API call
    console.log(newSort);
  };

  onPaginationChange = (newPagination) => {
    // API call
    console.log(newPagination);
  };
}
