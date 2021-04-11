import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brandServices/brand.service';
import { CarDetailService } from 'src/app/services/carServices/car-detail.service';
import { ColorService } from 'src/app/services/colorServices/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  currentCar:CarDetail;
  dataLoaded=false;
  filterText="";
  carBrands:Brand[]=[];
  carColors:Color[]=[];
  selectedBrandId:number=0;
  selectedColorId:number=0;
  constructor(private carDetailService:CarDetailService, 
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
        else{
        this.getCarDetails();
      }
    })

    
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
      this.getBrands();
      this.getColors();
    })
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrandAndColor(brandId:number,colorId:number){
    this.carDetailService.getCarsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentCar(car:CarDetail){
    this.currentCar=car;
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.carBrands=response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.carColors=response.data;
    })
  }

  setSelectedBrandId(selectedBrand:number){
    this.selectedBrandId=selectedBrand
  }

  setSelectedColorId(selectedColor:number){
    this.selectedColorId=selectedColor
  }

  getFilterCars(){
    if(this.selectedBrandId>0 && this.selectedColorId==0){
      this.getCarsByBrand(this.selectedBrandId)
    }
    else if(this.selectedColorId>0 && this.selectedBrandId==0){
      this.getCarsByColor(this.selectedColorId)
    }
    else if(this.selectedBrandId>0 && this.selectedColorId>0){
      this.getCarsByBrandAndColor(this.selectedBrandId,this.selectedColorId)
    }
  }
}
