import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <!-- *ngIf="condition" evaluates to a false value then the element is removed from the DOM -->
      <h2>Edit this Food</h2>
      <div>
        <h3>
          <label>Edit Name: </label>
          <input [(ngModel)]="childSelectedFood.name">
          <!-- ngModel directive binds an input, select, textarea or custom form control to a property on the scope using ngModelController. Resposible for: binding the view into the model-->
        </h3>
      </div>
      <div>
        <h3>
          <label>Edit Calories: </label>
          <input [(ngModel)]="childSelectedFood.calories">
        </h3>
      </div>
      <div>
        <h3>
          <label>Edit details: </label>
          <input [(ngModel)]="childSelectedFood.details">
        </h3>
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
