import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

import { tap } from "rxjs/operators";

const apiKey = environment.apiKey;
const {apiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  loading;

  constructor(private http:HttpClient, public loadingController: LoadingController) { }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000
    });
    return this.loading.present();
  }

  getData(url) : Observable<any>
  {
    this.showLoading();
    return this.http.get(`${apiUrl}/${url}apiKey=${apiKey}&language=es`)
      .pipe(
        tap(value => {
          if(this.loading)
          {
            this.loading.dismiss();
          }
      }));
  }
}
