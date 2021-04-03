import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/colorModel/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl="https://localhost:44361/api/colors/getall";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
