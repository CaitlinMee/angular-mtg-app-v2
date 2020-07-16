import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Set } from './set';
import { Observable, throwError } from 'rxjs'; //handles asynchronous operations and errors in this demo app.
import { retry, catchError, map } from 'rxjs/operators'; //handles asynchronous operations and errors in this demo app.

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  //Define API
  apiURL = 'https://api.magicthegathering.io/v1/sets';

  constructor(private http: HttpClient) { }

     /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'X-Request-Id': 'cc7afec7-3ccf-40ab-8294-ee694aa1cbbf',
      'cf-request-id': '03f31cb9af00000a20ca28e200000001'

    })
  }

  // HttpClient API get() method => Fetch sets list
  getSets(): Observable<Set> {
    return this.http.get<Set>(this.apiURL, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch set
  getSet(code): Observable<Set> {
    return this.http.get<Set>(this.apiURL + '/v1/sets' + code)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create set
  createSet(set): Observable<Set> {
    return this.http.post<Set>(this.apiURL + '/v1/sets', JSON.stringify(set), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update set
  updateSet(code, set): Observable<Set> {
    return this.http.put<Set>(this.apiURL + '/v1/sets' + code, JSON.stringify(set), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpCLient API delete() method => Delete set
  deleteSet(code){
    return this.http.delete<Set>(this.apiURL + '/v1/sets' + code, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
