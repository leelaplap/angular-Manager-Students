import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StarComponent} from '../stars/star/star.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentCreateComponent},
  {path: ':id/edit', component: StudentEditComponent},
];

@NgModule({
  declarations: [StudentEditComponent, StudentListComponent, StudentCreateComponent, StarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule {
}
