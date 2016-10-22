//making constructor for Food method
export class Food {
  public noFoodAdded: boolean = false; 

    constructor(public name: string, public calories: number, public details: string, public id: number) { }
}
