import {Injectable} from '@angular/core';
import {IStudent} from './istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
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

  constructor() {
  }

  getAll() {
    return this.students;
  }

  add(student) {
    this.students.push(student);
  }
}
