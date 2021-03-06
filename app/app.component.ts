import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <!-- add nav bar -->
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <!-- /////// add /img under?
      If no food added show add new food, if there's already food show food list: <div *ngIf="thing">
      <h1>Thing is true and therefore it is displayed!</h1>
    </div>
    <button (click)="show()">SHOW</button>
    <button (click)="hide()">HIDE</button>-->
      <food-list
        [childFoodList]="masterFoodList"
        (clickSender)="showFood($event)"
      ></food-list>
      <div *ngFor="let currentFood of food">
      <!-- loop showing array of food want to change button to just click link!-->
          <h2>{{ currentFood.name }}</h2>
          <button (click)="showFood(currentFood)">Edit</button>
      </div>
      <edit-food
        [childSelectedFood]="selectedFood"
        (editedClickedSender)="finishedEditing()"
      ></edit-food>
      <hr>
      <new-food
        (newFoodSender)="addFood($event)"
      ></new-food> <!--from new-food.component.ts & also add trigger method called addFood that we'll declare next. addFood method's job will be to add the food to the array sending a food object along our newFoodSender bridge, we use the $event keyword to signify that our addFood method will be receiving an argument.-->

    </div>
  </div>

`
})


export class AppComponent {
  //thing = "something that is not null";
  // show() {
  //   this.thing = "not null";
  // }
  // hide() {
  //   this.thing = null;
  // }
  public masterFoodList:  Food[] = [
    //create the default food data * need to add id b/c I called it out in the constructor in food.model.ts
    new Food("Som Tum", 250, "Yummy & Skinny", 0),
    new Food("Rare Steak with Fries", 700, "Big Steak w/tons of fat", 1)

      //foreach *ngFor="List food added"
    /**Create a public property called food of type Food(the name of our Model class). We used the new keyword to instantiate a new Food with the description "Create food-list app." and an id of 0 --We changed public food: Food; property into an array of Food objects called foods. Then we display them in our template by creating a loop using the directive *ngFor which built into Angular They are speical keywords that you can use as attributes in HTML we now store data w/a model, store instances of that Model in a component, and display the data in a View by using the Controller Class(also called the Component Class).
    */
  ];
  //show list
  selectedFood: Food = null;
  showFood(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  //edit food
  finishedEditing() {
    this.selectedFood = null;
  }
  //Declare new food
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

}

// constructor
// export class Meal {
//   public highCal: boolean = false; //public highCal? = if this true, display
//
//     constructor(public name: string, public calories: number, public details: string, public id: number) { }
// }


// @Component({
//   selector: 'child',
//   template: `
//     <child
//       [childThing]="parentThing"
//       (clickSender)="receiveFromChild($event)"
//     ></child>
//   `
// })
//export class AppComponent {
 //thing = "something that is not null";
 //show() {
 //this.thing = "not null";
//}
//hide(){
  //this.thing = null;
//}
//}
