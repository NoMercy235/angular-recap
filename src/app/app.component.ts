import { Component } from '@angular/core';

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

  addData = () => {
    this.tableData = [...this.tableData, { id: 3, name: 'test3' }]
  };

  onSortChange = (newSort) => {
    console.log(newSort);
  };
}
