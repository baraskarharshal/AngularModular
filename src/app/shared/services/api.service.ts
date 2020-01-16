import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from '../../../../node_modules/rxjs/operators';
import { Router } from '@angular/router';
import { AppConfig } from '../config/app.config';


interface ApiParam {
  data?: any;
  params?: any;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private static instance:ApiService;
  constructor(public httpClient: HttpClient, private router: Router) {}


  public static getInstance(): ApiService {
    if (!ApiService.instance) {
     let httpClient : HttpClient;
     let router:Router;
      ApiService.instance = new ApiService(httpClient,router);
    }

    return ApiService.instance;
}

  /**
   * @description a single request method to perform any api operation.
   * It's fully depends on the ApiConfig file.
   * @param name
   * @param param
   */
  request(name: string, param?: ApiParam): Observable<any> {
    const endpoint = AppConfig.api.endpoints.find(
      _endpoint => _endpoint.name === name
    );
    if (!endpoint) {
      throw new Error('Enpoint with this name not found');
    }

    const apiUrl = this.buildApiUrl(endpoint, param);
    const httpMethod = endpoint.method;
    const httpRequest = {};

    // this.router.navigate(['/home']);

    httpRequest['body'] = param != null ? param['data'] : '';
    httpRequest['headers'] =
      param && param['data'] instanceof FormData
        ? {}
        : { 'content-type': 'application/json' };

     return this.httpClient
      .request(httpMethod, apiUrl, httpRequest)
      .pipe(catchError(this.handleError('apiCall', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 422) {
        return throwError(error.error.message);
      } else if (error.status === 401 || error.status === 403) {
        this.router.navigate(['/account/login']);
      } else if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        // console.error(
        //   `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        // );
       // this.router.navigate(['/account/login']);
      }

      // Let the app keep running by returning an empty result.
      return Observable.throw(error);
    };
  }

  /**
   * @description builds and replaces the api params in the url
   * @param endpoint
   * @param param
   */
  private buildApiUrl(endpoint, param: ApiParam): string {
      let url = AppConfig.api.baseUrl + endpoint.url;
    
    // let url =  endpoint.url;

    if (param) {
      for (const key in param.params) {
        if (param.params.hasOwnProperty(key)) {
          const value = param.params[key];

          url = url.replace('[' + key + ']', value);
        }
      }
    }

    return url;
  }
}
