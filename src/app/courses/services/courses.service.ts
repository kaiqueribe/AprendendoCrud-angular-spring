import {Injectable} from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {delay, first, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(courses => console.log(courses))
      );

  }

  save(course: Course){
    return this.httpClient.post<Course>(this.API, course)
    // console.log(course);
  }


}
