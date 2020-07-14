import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-set-create',
  templateUrl: './set-create.component.html',
  styleUrls: ['./set-create.component.css']
})
export class SetCreateComponent implements OnInit {

  @Input() setDetails = { name: '', block: '', code: 0, releaseDate: 'dd/mm/yyyy', expansion: ''}

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {}

  addSet(dataSet) {
    this.restApi.createSet(this.setDetails).subscribe((data: {}) => {
      this.router.navigate(['/set-list'])
    })
  }

}
