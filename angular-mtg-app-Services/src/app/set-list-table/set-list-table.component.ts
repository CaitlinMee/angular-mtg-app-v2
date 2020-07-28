import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-set-list-table',
  templateUrl: './set-list-table.component.html',
  styleUrls: ['./set-list-table.component.css']
})
export class SetListTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'name', 'block',  'releaseDate', 'expansion'];
  database: MtgDatabase | null;
  data: Set[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.database = new MtgDatabase(this._httpClient);

    //if the user changes the sort order, reset back to first page
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.database!.getCardSets(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          //flip flag to show that loading has finished
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // catch if the api has reached its rate limit. return empty data
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
    }
  }

  export interface MtgApi {
    items: Set[];
    total_count: number;
  }

  export interface Set {
    code: number;
    name: string;
    block: string;
    expansion: string;
    releaseDate: number;
  }

  export class MtgDatabase {
    constructor(private _httpClient: HttpClient) {}

    getCardSets(sort: string, order: string, page: number ): Observable<MtgApi> {
      const href = 'https://api.magicthegathering.io/v1/sets';
      const requestUrl = 
      '${href}?q=sets:angular/component$sort=${sort}&order=${order}&page=${page + 1}';
      return this._httpClient.get<MtgApi>(requestUrl);
    }
  }