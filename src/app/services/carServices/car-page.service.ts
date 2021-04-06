import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CarPageComponent } from 'src/app/components/car-page/car-page.component';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetail } from 'src/app/models/carDetail';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarPageService {

  apiUrl="https://localhost:44361/api/";
  constructor(private httpClient:HttpClient) { }


  getCarDetailById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailbyid?id="+carId
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
