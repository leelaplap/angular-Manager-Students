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
      image: 'assets/images/anh1.jpg',
      star: 5
    },
    {
      name: 'leQuynhTrang',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh2.jpg',
      star: 4.5
    },
    {
      name: 'nguyenLamHaVi',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh3.jpg',
      star: 2.5
    },
    {
      name: 'hoLiPhuong',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh4.jpg',
      star: 4
    },
    {
      name: 'nguyenThiThuTrang',
      age: 21,
      address: 'hanoi',
      image: 'assets/images/anh5.jpg',
      star: 1.5
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
