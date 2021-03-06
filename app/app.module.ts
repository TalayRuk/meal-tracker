import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { FoodIntakePipe } from './food-intake.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    NewFoodComponent,
    EditFoodComponent,
    FoodIntakePipe,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
