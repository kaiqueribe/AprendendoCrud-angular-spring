import {Injectable} from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Course[] {
    return [ new courses.json()];

  }
}
