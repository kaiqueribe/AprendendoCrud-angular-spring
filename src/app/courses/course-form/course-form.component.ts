import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CoursesService} from "../services/courses.service";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrl: './course-form.component.scss',
    standalone: false
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: CoursesService,
              private snackBar: MatSnackBar,
              private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.form.value);
    // this.service.save(this.form.value)
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
    // .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel() {
    console.log('onCalcel');
    this.location.back();
  }

  private onSuccess() {
    console.log('Sucesso');
    this.snackBar.open('Curso Salvo com Sucesso!', '', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
    this.onCancel();
  }

  private onError() {
    // this.snackBar.open('Erro ao Cadastrar o Curso', '', {duration: 3000});

    this.snackBar.open('Não foi possivel salvar o novo curso', '', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });

  }

}


