import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `

    <h2>Hello, What did you eat today?: </h2>
    <hr>
    <!--**Wish Add Name after Hi from prompt -->
    <div>
      <h3><label>Enter Your Food Here: </label>
      <input #newName></h3>
      <!--created local variable to hold its HTML input tag
      **WISH Add drop down Meal: Breakfast, Lunch, Dinner, Dessert, Snacks, Drinks-->
    </div>
    <div>
      <h3><label>Enter Food Calories: </label>
      <input #newCalories></h3>
      <h3><a href="http://caloriescount.com/foodcalculator.aspx?AspxAutoDetectCookieSupport=1">If you don't know, Click here to find out the calories!</a></h3>

      <!--created local variable to hold its HTML input tag
      **WISH add Food API to get the calories or add link to find out how much calories is the food http://opendata.stackexchange.com/questions/269/open-api-for-nutritional-information-and-or-food-barcodes-->
    </div>
    <div>
      <h3><label>Add Your Food Details Here: </label>
      <input #newDetails></h3>
      <!--created local variable to hold its HTML input tag
      **WISH Add drop down Meal: Breakfast, Lunch, Dinner, Dessert, Snacks, Drinks-->
      <button class="btn-success btn-lg" (click)="addFoodClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      newDetails.value='';
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
