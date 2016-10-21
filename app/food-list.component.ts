import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `

  `
})

export FoodListComponent {}
constructor(public name: string, public calories: number, public details: string, public id: number) { }
