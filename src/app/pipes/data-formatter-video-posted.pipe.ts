import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormatterVideoPosted'
})
export class DataFormatterVideoPostedPipe implements PipeTransform {

  toMonth( month ) : String{ 
    switch( month ){ 
      case 0:
        return "Jan";
      case 1: 
        return "Feb";
      case 2:
        return "Mar";
      case 3: 
        return "Apr";
      case 4: 
        return "May";
      case 5: 
        return "June";
      case 6:
        return "July";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9: 
        return "Oct";
      case 10:
        return "Nov";
      case 11: 
        return "Dec"; 
    }
  }

  transform(value: any, isComment:boolean = false): String {
    let todaysDate = new Date();
    let valueAsDate = value;

    if( typeof( valueAsDate ) != typeof( Date ) ){ 
      let valueAsDate = new Date( value );
    }

    if( isComment ){ 
      return this.toMonth( valueAsDate.getMonth() ) + " " + valueAsDate.getDate() + ", " + valueAsDate.getFullYear();
    }
    
    let yearsApart = todaysDate.getFullYear() - valueAsDate.getFullYear();
    if( yearsApart == 1 ){ 
      return yearsApart.toString() + " year ago";
    }
    else if( yearsApart > 1 ){ 
      return yearsApart.toString() + " years ago";
    }

    let monthsApart = ( todaysDate.getMonth() + 1 ) - ( valueAsDate.getMonth() + 1 );
    if( monthsApart == 1 ){ 
      return monthsApart.toString() + " month ago";
    }
    else if( monthsApart > 1 ){ 
      return monthsApart.toString() + " months ago";
    }

    let weeksApart = todaysDate;
    
    let daysApart = todaysDate.getDate() - valueAsDate.getDate();
    if( daysApart == 1 ){ 
      return daysApart.toString() + " day ago";
    }
    else if( daysApart > 1 ){ 
      return daysApart.toString() + " days ago";
    }

    let minutesApart = todaysDate.getMinutes() - valueAsDate.getMinutes();
    if( minutesApart == 1 ){ 
      return minutesApart.toString() + " minute ago";
    }
    else if( minutesApart > 1 ){ 
      return minutesApart.toString() + " minutes ago";
    }

    return "now";

  }

}