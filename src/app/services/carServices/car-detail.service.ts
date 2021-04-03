import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/carModel/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl="https://localhost:44361/api/cars/getcardetail";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
