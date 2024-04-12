import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Frontend':
        return 'code';
      case 'Backend':
        return 'code';
      case 'Cloud':
        return 'cloud';
      case 'Testing':
        return 'bug_report';
      case 'Database':
        return 'storage';


    }

    return 'more';
  }

}
