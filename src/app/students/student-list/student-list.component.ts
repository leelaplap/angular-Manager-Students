import {Component, OnInit} from '@angular/core';
import {IStudent} from '../istudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = [
    {
      name: 'ngoAnhThu',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh1.jpg'
    },
    {
      name: 'leQuynhTrang',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh2.jpg'
    },
    {
      name: 'nguyenLamHaVi',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh3.jpg'
    },
    {
      name: 'hoLiPhuong',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh4.jpg'
    },
    {
      name: 'nguyenThiThuTrang',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh5.jpg'
    },
  ];
  showImg = true;
  listStudents: IStudent[] = [];

  constructor() {
  }

  ngOnInit() {
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
}
