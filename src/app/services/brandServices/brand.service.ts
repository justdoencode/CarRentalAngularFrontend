import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from 'src/app/models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl="https://localhost:44361/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
