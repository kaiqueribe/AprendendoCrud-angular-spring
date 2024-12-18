import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {CoursesService} from "../../services/courses.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";


import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialogComponent
} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: false
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> | null = null;
  // courses:Course[] = [];


  // coursesService: CoursesService;


  constructor(private coursesService: CoursesService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.refresh();
  }

  refresh() {
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
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], {relativeTo: this.route});
    console.log('onEdit')
  }

  onDelete(course: Course) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Deseja realmente remover esse curso ?',
    });

    dialogRef.afterClosed().subscribe((result: Boolean) => {
      if (result) {
        this.coursesService.delete(course._id).subscribe(value => {
            console.log('onDelete');
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'x', {
              duration: 2000,
              horizontalPosition: "center",
              verticalPosition: "top"
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );

      }


    });


  }

}
