import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <!-- *ngIf="condition" evaluates to a false value then the element is removed from the DOM -->
      <h2>Edit this Food</h2>
      <div>
        <label>Edit Name: </label>
        <input [(NgModule)]="childSelectedFood.name">
      </div>
      <div>
        <label>Edit Calories: </label>
        <input [(NgModule)]="childSelectedFood.calories">
      </div>
      <div>
        <label>Edit details: </label>
        <input [(NgModule)]="childSelectedFood.details">
        <button class="btn-success btn-lg" (click)="editedClicked()
        ">Edit Food</button>
      </div>
    </div>

  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() editedClickedSender = new EventEmitter();
  editedClicked() {
    this.editedClickedSender.emit();
  }
}
