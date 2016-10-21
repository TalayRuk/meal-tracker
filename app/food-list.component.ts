import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList"> <!--Instead of food since that change to childFoodList below -->
      <h3>{{ currentFood.name }}</h3>
      <button (click)="editFoodClicked(currentFood)">Edit Food</button>
  </div>

  `
})

export FoodListComponent {
  //view Food inputted, we already put food to MasterFood @ app.component now we just need to write references;
  @Input() childFoodList: Food[];
  @Output() clickSender: new EventEmitter();
  //add edit food to the food list
  editFoodClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

}
// constructor(public name: string, public calories: number, public details: string, public id: number) { }
