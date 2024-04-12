import {NgModule} from '@angular/core';
import {CoursesRoutingModule} from "../../courses/courses-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    CoursesRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ],

})
export class AppMaterialModule {
}
