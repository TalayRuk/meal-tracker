import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <!-- add nav bar -->
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <!-- /////// If no food added show add new food, if there's already food show food list
      <div *ngFor="let currentFood of food">
          <h3>{{ currentFood.description }}</h3>
          <button (click)="showDetails(currentFood)">Edit</button>
        </div>
        <edit-food
          [childSelectedFood]="selectedFood"
          (doneClickedSender)="finishedEditing()"
        ></edit-food>-->
        <!-- add new food -->
        <new-food
          (newFoodSender)="addFood($event)"
        ><new-food><!--from new-food.component.ts & also add trigger method called addFood that we'll declare next. addFood method's job will be to add the food to the array sending a food object along our newFoodSender bridge, we use the $event keyword to signify that our addFood method will be receiving an argument.-->

      </div>
  </div>

`
})


export AppComponent {
  public masterFoodList:  Food[] = [
    /**Create a public property called food of type Food(the name of our Model class). We used the new keyword to instantiate a new Food with the description "Create food-list app." and an id of 0 --We changed public food: Food; property into an array of Food objects called foods. Then we display them in our template by creating a loop using the directive *ngFor which built into Angular They are speical keywords that you can use as attributes in HTML we now store data w/a model, store instances of that Model in a component, and display the data in a View by using the Controller Class(also called the Component Class).
    */
  ];

  //Declare new food
  addFood(NewFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

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
