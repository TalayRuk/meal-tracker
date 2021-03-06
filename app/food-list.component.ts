import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div class="box">
      <h2> View Your Food Intake Today </h2>
      <h3>
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All Food Intake</option>
        <option value="high">Show Food High calories </option>
        <option value="low">Show Low calories Food below 500 </option>
      </select>
      </h3>
      <div *ngFor="let currentFood of childFoodList | foodIntake: selectedFoodIntake">
        <!--Instead of food since  that change to childFoodList *ngFor indicates Showing an array property; that the <li> element & its children constitute a master template = take each food in the childFoodList array, store it in the local currentFood variable, & make it available to the corresponding template instance.-->
        <h2>{{ currentFood.name }}  <a (click)="
        editFoodClicked(currentFood)">   Edit   </a>
        calories: {{ currentFood.calories }}
        details: {{ currentFood.details }}
        </h2>
      </div>
    </div>

  `
})


export class FoodListComponent {
  //view Food inputted, we already put food to masterFood @ app.component now we just need to write references;
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  //add edit food to the food list
  public selectedFoodIntake: string = "";//when it not set as "high" or "low" it'll always show "all" even if not specify anything in the string. That's b/c I only define the low & high specifically in the food-intake.pipe.
  onChange(optionFromMenu) {
    this.selectedFoodIntake = optionFromMenu;
    console.log(this.selectedFoodIntake);
  }
  editFoodClicked(foodToEdit: Food) {
    //sends the string "currentFood" to the parent.
    this.clickSender.emit(foodToEdit);//(food to send )
  }

}
// constructor(public name: string, public calories: number, public details: string, public id: number) { }
