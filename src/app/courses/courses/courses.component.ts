import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses:Course[] = [];
  displayedColumns = ['_id', 'name', 'category', 'actions'];

  // coursesService: CoursesService;


  constructor(private coursesService: CoursesService,
              public dialog: MatDialog,
              private router: Router
  ) {
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os cursos');
          return of([]);
        })
      );

    // this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    console.log('onAdd');
    this.router.navigate(['courses/new']);
  }


}
