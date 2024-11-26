import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../model/course";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = []

  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['_id','name', 'category', 'actions'];

  constructor() {

  }

  ngOnInit(): void {

  }

  onAdd() {
this.add.emit(true);
  }

  onEdit(){
    console.log('onEdit')
    // this.router.navigate(['courses/edit']);
  }

  onDelete(){
    console.log('onDelete')
  }


}
