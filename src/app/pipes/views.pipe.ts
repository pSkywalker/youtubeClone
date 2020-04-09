import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'views'
})
export class ViewsPipe implements PipeTransform {

  transform(value: number, isVideoScreen: boolean = false): String {

    if( isVideoScreen ){ 

      let reverseStringArray = value.toString().split("");
      if( reverseStringArray.length < 5 ){ 
      }
      else if( reverseStringArray.length == 5 ){ 
        reverseStringArray.splice( 1 , 0, "," );
      }
      else if( reverseStringArray.length == 6){ 
        reverseStringArray.splice( 2 , 0 , "," );
      }
      else if( reverseStringArray.length == 7 ){ 
        reverseStringArray.splice( 1 , 0 , ",");
        reverseStringArray.splice( 5 , 0 , ",");
      }
      else if( reverseStringArray.length == 8 ){ 
        reverseStringArray.splice( 2, 0 , "," );
        reverseStringArray.splice( 6 , 0 , "," );
      }
      else if( reverseStringArray.length == 8 ){ 
        reverseStringArray.splice( 3, 0 , "" );
        reverseStringArray.splice( 7 , 0 , ",");
      }
      else if( reverseStringArray.length == 9 ){ 
        reverseStringArray.splice( 1, 0,"," );
        reverseStringArray.splice( 5, 0,"," );
        reverseStringArray.splice( 9, 0,"," );
      }
      else if( reverseStringArray.length == 10 ){ 
        reverseStringArray.splice( 2, 0 , "," );
        reverseStringArray.splice( 6 , 0 , ",");
        reverseStringArray.splice( 10, 0 , ",");
      }
      return reverseStringArray.join("");
      
      /*
      let reverseStringArray = value.toString().split("").reverse();
      let amountOfCommas = 0;
      let devisor = 3;
      for( let x = 0; x < reverseStringArray.length; x++ ){ 
        if( x % 3 == 0 && x != 0 ){ 
          reverseStringArray.splice( x+amountOfCommas, 0 , "," );
          amountOfCommas++;
        }
      }
      let amountOfViews = reverseStringArray.reverse().join("");
      return amountOfViews;
      */
    }

    if( value < 10001 ){ 
      let numberString = "";
      return value.toString() + "k";
    }
    else if( value < 1000000 && value > 9999){ 
      let numberString = value.toString().substr(0,1);
      if( parseInt( value.toString().substr( 1,1 ) ) > 0 ){
        numberString += value.toString().substr( 1,1 );
      }
      if( parseInt( value.toString().substr( 2,1 ) ) > 0 ){ 
        numberString += value.toString().substr( 2,1 );
      }
      return numberString + "K";
    }
    else if( value > 999999 && value < 1000000001 ){ 
      if( parseInt( value.toString().substr(1,1) ) > 0 ){ 
        let numberString = value.toString().substr( 0,1 ) + "." + value.toString().substr(1,1);
        return numberString + "M";
      }
      else{ 
        return value.toString().substr(0,1) + "M";
      }
    }
    else if( value > 1000000001 ){ 
      return value + "B";
    }
  }

}
