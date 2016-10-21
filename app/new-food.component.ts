import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <!--//////////////////////// Add new food /////////////////////-->

  <h1>Hi, What did you eat today?: </h1>
  <!--**Wish Add Name after Hi from prompt -->
  <div>
    <label>Enter Your Food Here: </label>
    <input #newName>
    <!--created local variable to hold its HTML input tag
    **WISH Add drop down Meal: Breakfast, Lunch, Dinner, Dessert, Snacks, Drinks-->
  </div>
  <div>
    <label>Enter Food Calories: </label>
    <input #newCalories>
    <!--created local variable to hold its HTML input tag
    **WISH add Food API to get the calories http://opendata.stackexchange.com/questions/269/open-api-for-nutritional-information-and-or-food-barcodes-->
  </div>
  <div>
    <label>Add Your Food Details Here: </label>
    <input #newDetails>
    <!--created local variable to hold its HTML input tag
    **WISH Add drop down Meal: Breakfast, Lunch, Dinner, Dessert, Snacks, Drinks-->
  </div>
  <div>
    <label>Enter Food ID:</label>
    <input #newId>

    <button (click)="addFoodClicked(newName.value, newCalories.value, newDetails.value, newId.value);
    newName.value='';
    newCalories.value='';
    newDetails.value='';
    newId.value='';
    ">Add New Food</button>
    <!-- get values typed into each field from input attach them to a click handler to the form's button. To trigger a method to add the new food, this will pass each input field's value into the method as an argument. ***Insert 2 commands inside of the double quotes on our button tag. It takes the form of (click)="doThing(); do AnotherThing(); setSomeVariable=3;" each command will run when there is a click event. We are setting both of the input values to blank strings. We break it down like below;
    <button
    (click)="
    methodToRun();
    anotherMethod();
    variable='thing';
    Then we close the quotes and the button tag:
    ">Text for button</button> -->
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addFoodClicked(name: string, calories: number, details: string, id: number) {
    var newFood: Food = new Food(name, calories, details, id);
    this.newFoodSender.emit(newFood);
    //we have to send our addNewFood up to App Component where we're keeping the rest of our foods, & add it to the array where it can be displayed & edited by our other components. So we need to create an output for it. Let's call it NewFoodSender. We'll emit the new food object when we click the add button in our addFoodClicked method, right after we've created the object.
    //Why can't we just sending the values up to the App Component? B/c event emitters are 1 lane bridges.
    //We can only send 1 argument at a time, so if we have multiple pieces of information to send btwn components we have to either bundle them up in an object or an array. So, we should construct our new food object here & then send it. B/c NewFoodComponent job is to create new foods.
    //Now we just need to connect the 2 components - so we need to tell the AppComponent to expect this new food output, & tell it what to do w/ the new food object. So in template where we load our new food componet, we use the parenthesis to signify that this child component will be sending an output called newFoodSender.
  }

}
