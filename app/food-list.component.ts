import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentFood of childFoodList"> <!--Instead of food sinceliiii that change to childFoodList *ngFor indicates Showing an array property; that the <li> element & its children constitute a master template = take each food in the childFoodList array, store it in the local currentFood variable, & make it available to the corresponding template instance.-->
        <h3>{{ currentFood.name }}</h3>
        <button (click)="
        editFoodClicked(currentFood)">Edit Food</button>
    </div>

  `
})

export class FoodListComponent {
  //view Food inputted, we already put food to masterFood @ app.component now we just need to write references;
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  //add edit food to the food list
  editFoodClicked(foodToEdit: Food) {
    //sends the string "currentFood" to the parent.
    this.clickSender.emit(foodToEdit);//(food to send )
  }

}
// constructor(public name: string, public calories: number, public details: string, public id: number) { }
