import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tablespage',
  templateUrl: './tablespage.component.html',
  styleUrls: ['./tablespage.component.css']
})
export class TablespageComponent implements OnInit {

  // DT Options
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  todos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    // DT Options
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 10,
      // order: [4, 'desc'],
      processing: true,
      // columnDefs: [{ orderable: false, targets: [6], searchable: false}]

    };

    this.apiService.getTodos().subscribe((res) => {
      this.todos.push(res);

      console.log(this.todos);
      // console.log(this.users[0]);
      // console.log(this.users[1]);
      // console.log(this.users.length);

      // DT Options
      this.dtTrigger.next();



    });

  }

}
