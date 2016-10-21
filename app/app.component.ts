import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `

`
})


export AppComponent {
  public food:  Food[] = [
    new Food(breakfast, 0)
  ]

}

// constructor
// export class Meal {
//   public highCal: boolean = false; //public highCal? = if this true, display
//
//     constructor(public name: string, public calories: number, public details: string, public id: number) { }
// }

//<div *ngIf="thing">
//   <h1>Thing is true and therefore it is displayed!</h1>
// </div>
// <button (click)="show()">SHOW</button>
// <button (click)="hide()">HIDE</button>

//export class AppComponent {
 //thing = "something that is not null";
 //show() {
 //this.thing = "not null";
//}
//hide(){
  //this.thing = null;
//}
//}
