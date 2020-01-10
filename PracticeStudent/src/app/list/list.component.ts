import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  constructor(private dataService: DataService) {
    this.students = dataService.getStudent();
  }

  ngOnInit() {
  }

}
