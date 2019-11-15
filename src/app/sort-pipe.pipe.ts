import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(item: Array<any>, args?: any): any {

    return item.sort(function(a, b){
    if(a[args.property] < b[args.property]){
    return -1 * args.direction;
    }
    else if( a[args.property] > b [args.property]){
    return 1 * args.direction;
    }
    else{
    return 0;
    }
    });
    };
}
