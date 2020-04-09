import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  navView : BehaviorSubject<any>;
  selectedItem : BehaviorSubject<any>;

  constructor() {
    this.navView = new BehaviorSubject<any>(1);
    this.selectedItem = new BehaviorSubject<any>(1) 
   }

  changeView() { 
    if( this.navView.value == 1  ){ 
      this.navView.next(0);
    }
    else{ 
      this.navView.next(1);
    }
  }

  getView(){
    return this.navView.asObservable();
  }

  selecteNewItem( item ){ 
    this.selectedItem.next( item );
  }

  getSelectedItem(){ 
    return this.selectedItem.asObservable();
  }

}
