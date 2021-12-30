import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchJson',
  pure: true
})
export class FetchJsonPipe implements PipeTransform {
  private studentData: any = null;
  private studentUrl = '';

  constructor(private http: HttpClient) { }

    transform(url: string): any {
      if (url !== this.studentUrl) {
        this.studentData = null;
        this.studentUrl = url;
        this.http.get(url).subscribe(result => this.studentData = result);
      }
    return null;
  }

}
