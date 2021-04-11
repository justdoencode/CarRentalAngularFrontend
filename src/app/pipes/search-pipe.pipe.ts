import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    
    return filterText?value.filter((c:CarDetail)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1
    ||c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1
    ||c.description.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value
    
  }

}
