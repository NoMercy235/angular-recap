import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-path';

  tableData = new Array(50).fill(0).map((el, index) => {
    return { id: index, name: `test-${index}`};
  });

  addData = () => {
    this.tableData = [...this.tableData, { id: 3, name: 'test3' }]
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
