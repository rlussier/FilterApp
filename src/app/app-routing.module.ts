import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

const routes: Routes = [
  { path: '', component: StudentsListComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'view3', component: View3Component },
  { path: 'view4', component: View4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
