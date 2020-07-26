import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";
import { BehaviorSubject, interval } from "rxjs";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  source = interval(1000);
  progress$ = new BehaviorSubject(0);
  tableData = new Array(50).fill(0).map(() => {
    return new User();
  });

  ngOnInit () {
    this.source.subscribe(() => {
      this.progress$.next(getRandomArbitrary(0, 100));
    });
  }

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
