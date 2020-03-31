import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bike } from 'src/app/models/bike.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Properties
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];

  bikeform: FormGroup;
  validMessage: string = "";
  invalidMessage: string = "";

  // Constructor
  constructor(private _bikeService: BikeService) {

  }

  // Runs on Init
  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  // Used when submitting the form
  submitRegistration(): void {
    if (this.bikeform.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you!";

      let bikeToAdd: Bike;
      bikeToAdd = this.bikeform.value;
      this._bikeService.createBikeRegistration(bikeToAdd).subscribe(
        sucess => {
          this.bikeform.reset();
          this.invalidMessage = "";
          setInterval(() => {
            this.validMessage = "";
          }, 5000);
        },
        err => {
          Observable.throw(err);
        },
        () => { })
    } else {
      this.invalidMessage = "Please fill out the form before submitting!";
    }

  }

  CreateBikeValidators(): FormGroup {
    let TheFormGroup: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      contact: new FormControl()
    });

    return TheFormGroup;
  }

}
