import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "foodIntake"

})

export class FoodIntakePipe implements PipeTransform {
  transform(input: Food[], desiredCalories) {
    var output: Food[] = [];
    for (var i = 0; i < input.length; i++) {
      if (desiredCalories === "high") {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
        return output;

      } else if (desiredCalories === "low") {
          if(input[i].calories < 500) {
            output.push(input[i]);
          }
          return output;

      } else {
        return input;
      }
    }
  }
}

// transform(input: Food[], desiredShowFood) {
//     var output: Food[] = [];
//

//     if("low-calorie foods (below 500 calories)") {
//       return "food where .calories === false";
//     } else if ("high-calorie foods (over 500 calories)") {
//       return "food where .calories === true";
//     } else { // this else is for when we want all food.
//       return "all food from input unchanged";
//     }
//   }
//return all food
    // var output(input: Food[]) {
    // return output;
    //}
