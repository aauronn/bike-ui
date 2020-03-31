import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Bike } from 'src/app/models/bike.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes: Bike[] = [];


  constructor(private _bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this._bikeService.getBikes().subscribe(
      success => {
        this.bikes = this._bikeService.Bikes;
      },
      err => console.error(err),
      () => console.log('Bikes lodaded')
    )
  }

}
