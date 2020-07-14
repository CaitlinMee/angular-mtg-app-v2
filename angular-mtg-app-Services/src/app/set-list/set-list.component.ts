import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {

  Set: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadSets()
  }

  // Get sets list
  loadSets() {
    return this.restApi.getSets().subscribe((data: {}) => {
      this.Set = data;
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

