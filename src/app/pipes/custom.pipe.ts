import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substr(0,args).toUpperCase();
    // transform(value: any): any {
    //   return value.toUpperCase();
  }

}
@Pipe({
  name: 'customjson'
})

export class CustomJSONPipe implements PipeTransform{

transform(value: any): any
{
     return JSON.stringify(value);  //convert javascript object into string
}

}
@Pipe({
name: 'filter'
})

export class FilterPipe implements PipeTransform{

transform(item:any[],field:string,value:string): any[]
{
   //item-emptable
   //field-job
   //value-clerk
   if(!item)
   {
     return[];
   }

if(!field||!value)
{
return item;
}

let x=item.filter(function(item)
{
let lowercaseitem=item[field].toLowerCase();
let res= lowercaseitem.includes(value.toLowerCase());
return res;
});
return x; //array of emp
}
}