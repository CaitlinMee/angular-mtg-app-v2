//https://stackoverflow.com/questions/50228138/cant-bind-to-datasource-since-it-isnt-a-known-property-of-table
import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {
  Set: [];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  constructor(
    private restApi: RestApiService
  ) { }

  ngAfterViewInIt() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.loadSets()
  }

  // Get sets list
  loadSets() {
    return this.restApi.getSets().subscribe((data: any) => {
      this.Set = data.sets;
    })
  }

  // Delete set
  deleteSets(code) {
    if (window.confirm('Are you sure you want to delete this set?')){
      this.restApi.deleteSet(code).subscribe(date => {
        this.loadSets()
      })
    }
  }
}

