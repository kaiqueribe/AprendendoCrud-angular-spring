import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {CoursesService} from "../../services/courses.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: false
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses:Course[] = [];


  // coursesService: CoursesService;


  constructor(private coursesService: CoursesService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute
  ) {
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os cursos');
          return of([]);
        })
      );

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
    this.router.navigate(['courses/new'],{relativeTo:this.route});
  }

  onEdit(course:Course) {
    this.router.navigate(['courses/edit', course._id],{relativeTo:this.route});
  }

  onDelete() {
    console.log('onDelete');
  }
}
