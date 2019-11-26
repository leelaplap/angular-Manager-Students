import {Component, OnInit} from '@angular/core';
import {IStudent} from '../istudent';
import {StudentsService} from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students = this.ss.getAll();
  showImg = true;
  listStudents: IStudent[] = [];
  showMess: string;

  constructor(private ss: StudentsService) {
  }

  ngOnInit() {
    this.listStudents = this.students;
  }

  delete(id) {
    this.students.splice(id, 1);
  }

  showImage() {
    this.showImg = !this.showImg;
  }

  filter(event) {
    const data = event.target.value;
    this.listStudents = (data) ? this.search(data) : this.students;
  }

  search(data) {
    return this.students.filter(
      student => student.name.toLowerCase().indexOf(data) !== -1
    );
  }

  showMessage(event) {
    this.showMess = event;
  }
}
