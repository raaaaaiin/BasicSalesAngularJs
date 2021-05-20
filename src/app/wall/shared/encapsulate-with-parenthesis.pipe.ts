import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'encapsulatewithParenthesis'
})
export class EncapsulateToParenthesis implements PipeTransform {
    transform(value: string, character: string):string {
      return value.replace(character, '');
    }

}
