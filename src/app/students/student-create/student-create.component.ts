import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentsService} from '../students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  submitted = false;
  addStudentForm = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    address: ['', [Validators.required]],
    star: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private sv: StudentsService,
              private router: Router
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    const data = this.addStudentForm.value;
    this.sv.add(data);
    this.router.navigate(['/students']);
  }

  get name() {
    return this.addStudentForm.get('name');
  }

  get age() {
    return this.addStudentForm.get('age');
  }

  get address() {
    return this.addStudentForm.get('address');
  }

  get star() {
    return this.addStudentForm.get('star');
  }
}
