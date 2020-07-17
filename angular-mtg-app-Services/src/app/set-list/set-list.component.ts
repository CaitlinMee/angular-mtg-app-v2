import { Component, OnInit, ViewChild } from '@angular/core';
//import { RestApiService } from "../shared/rest-api.service";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { SetListService, SetsDataSource } from './set-list.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {
  Set: [];
  dataSource: SetsDataSource;
  displayedColumns= [
    'code', 'name', 'block',  'releaseDate', 'expansion'
  ];

  constructor(
    private setlistService: SetListService
    //private restApi: RestApiService
  ) {}

  ngOnInit() {
    this.dataSource = new SetsDataSource(this.setlistService);
    this.dataSource.loadSets(1);

    //this.loadSets()
  }

  // Get sets list
  //loadSets() {
    //return this.restApi.getSets().subscribe((data: any) => {
      //this.Set = data.sets;
    //})
  //}

  // Delete set
  //deleteSets(code) {
    //if (window.confirm('Are you sure you want to delete this set?')){
      //this.restApi.deleteSet(code).subscribe(date => {
        //this.loadSets()
      //})
    //}
  //}
}

