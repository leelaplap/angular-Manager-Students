import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentsService} from '../students.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  updateStudentForm;
  index = +this.activateRoute.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private sv: StudentsService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const student = this.sv.findStudentById(this.index);
    this.updateStudentForm = this.fb.group(
      {
        name: [student.name, [Validators.required]],
        age: [student.age, [Validators.required]],
        address: [student.address, [Validators.required]],
        star: [student.star, [Validators.required]],
      }
    );
  }

  get name() {
    return this.updateStudentForm.get('name');
  }

  get age() {
    return this.updateStudentForm.get('age');
  }

  get address() {
    return this.updateStudentForm.get('address');
  }

  get star() {
    return this.updateStudentForm.get('star');
  }

  submit() {
    this.sv.update(this.updateStudentForm.value, this.index);
    this.router.navigate(['/students']);
  }
}
