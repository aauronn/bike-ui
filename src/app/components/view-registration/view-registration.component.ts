import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { Bike } from 'src/app/models/bike.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg:Bike = new Bike();
  private id:string = '';

  constructor(private _bikeService:BikeService, private _activatedroute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.id = this._activatedroute.snapshot.params.id;
    this.getBikeRegistration(this.id);
  }

  //** Get bike by Id */
  getBikeRegistration(id:string){
    
    this._bikeService.getBikeById(id).subscribe(
      success => {
        // Copy bike from service to local bike in component
        this.bikeReg = this._bikeService.Bike;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Bike Loaded');
      }
    );
  }
}
