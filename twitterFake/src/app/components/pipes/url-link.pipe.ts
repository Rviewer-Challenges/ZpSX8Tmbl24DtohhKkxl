import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlLink'
})
export class UrlLinkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let cadenaADevolver:string='';
    if (value==''){
      return '';
    }
    if (value!=''){
      if(value.includes('https://')){
        cadenaADevolver=value.slice(8);
      }
      else if (value.includes('http://')){
        cadenaADevolver=value.slice(7);
      }
    }
    return cadenaADevolver;
  }

}
