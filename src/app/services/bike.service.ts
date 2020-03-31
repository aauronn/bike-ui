import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bike } from '../models/bike.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  // Array of bikes that we get from service
  public Bikes: Bike[] = [];

  // A bike that we get from service
  public Bike: Bike = new Bike();

  constructor(private http: HttpClient) {

  }

  getBikes(): Observable<boolean> {

    return this.http.get('/server/api/v1/bikes', httpOptions)
      .pipe(map((data: any[]) => {
        this.Bikes = data;
        return true;
      }));
  }

  getBikeById(id: string): Observable<boolean> {
    return this.http.get('/server/api/v1/bikes/' + id, httpOptions)
      .pipe(map((data: any) => {
        this.Bike = data;
        return true;
      }));
  }

  createBikeRegistration(model:Bike):Observable<boolean>{
    return this.http.post('/server/api/v1/bikes', model, httpOptions)
      .pipe(map((data: any) => {
        this.Bike = data;
        return true;
      }));
  }
}
