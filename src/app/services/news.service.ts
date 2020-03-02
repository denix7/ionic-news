import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey;
const {apiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getData(url) : Observable<any>
  {
    return this.http.get(`${apiUrl}/${url}apiKey=${apiKey}`);
  }
}
