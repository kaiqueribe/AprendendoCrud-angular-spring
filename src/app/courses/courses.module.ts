import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatToolbar,
    MatCard,
    MatIcon,

  ]
})
export class CoursesModule {
}
