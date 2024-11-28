import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {CoursesService} from "../services/courses.service";
import {of} from 'rxjs';
import {Course} from "../model/course";

export const CourseResolver: ResolveFn<Course> = (route, state) => {

  const service = inject(CoursesService);

  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }
  return of({_id: '', name: '', category: ''});
};
