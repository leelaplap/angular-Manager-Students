import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { MenuComponent } from './menu/menu.component';
import { StudentCreateComponent } from './students/student-create/student-create.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { StarComponent } from './stars/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    MenuComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
