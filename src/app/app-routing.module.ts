import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './students/student-list/student-list.component';
import {StudentCreateComponent} from './students/student-create/student-create.component';
import {StudentEditComponent} from './students/student-edit/student-edit.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'students/create', component: StudentCreateComponent},
  {path: 'students/:id/edit', component: StudentEditComponent},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
