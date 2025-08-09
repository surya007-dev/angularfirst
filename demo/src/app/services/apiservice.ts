import { HttpClient, } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  _http = inject(HttpClient);

  getData(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getJSON():Observable<any>{
    return this._http.get('/data.json');
  }
}
