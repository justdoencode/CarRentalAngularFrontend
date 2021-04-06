import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarPageService } from 'src/app/services/carServices/car-page.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  carDetail:CarDetail;
  basePath="https://localhost:44361/"
  constructor(private carPageService:CarPageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetailById(params["carId"])
    })
  }

  getCarDetailById(carId:number){
    this.carPageService.getCarDetailById(carId).subscribe(response=>{
      this.carDetail=response.data;
    })
  }

}
