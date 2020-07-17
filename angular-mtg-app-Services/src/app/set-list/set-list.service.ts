import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Set } from '../shared/set';
import { map, finalize, catchError } from 'rxjs/operators';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class SetListService {

  apiURL = 'https://api.magicthegathering.io/v1/sets'

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'X-Request-Id': 'cc7afec7-3ccf-40ab-8294-ee694aa1cbbf',
      'cf-request-id': '03f31cb9af00000a20ca28e200000001'

    })
  }

  findSets(
    setCode:number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<Set[]> {

      return this.http.get(this.apiURL, {
        params: new HttpParams()
          .set('setCode', setCode.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      }).pipe(
        map(res => {res["payload"] = res;
        return res["payload"];})
      );
    }
}

export class SetsDataSource implements DataSource<Set> {

  private setsSubject = new BehaviorSubject<Set[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private setlistService: SetListService) {}

  connect(collectionViewer: CollectionViewer): Observable<Set[]> {
    return this.setsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.setsSubject.complete();
    this.loadingSubject.complete();
  }

  loadSets(setCode: number, filter = '', sortDirection = 'asc',
    pageIndex = 0, pageSize = 3) {
      this.loadingSubject.next(true);
      this.setlistService.findSets(setCode, filter, sortDirection,
        pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(sets => this.setsSubject.next(sets));
    }
}
