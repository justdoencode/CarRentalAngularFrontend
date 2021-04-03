import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../../models/brandModel/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl="https://localhost:44361/api/brands/getall";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
