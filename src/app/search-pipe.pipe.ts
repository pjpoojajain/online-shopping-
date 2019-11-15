import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any[], srch: string): any[] {

    if(!value) return [];
    if(!srch) return value;
    srch = srch.toLowerCase();

    return value.filter(function(it)
           {
              return it.name.toLowerCase().includes(srch);
           });
  }

}
