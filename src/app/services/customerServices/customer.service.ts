import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/customerModel/customerResposeModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl="https://localhost:44361/api/customers/getall";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
