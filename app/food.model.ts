//making constructor for Food method
export class Food {
  public highCal: boolean = false; //public highCal? = if this true, display

    constructor(public name: string, public calories: number, public details: string, public id: number) { }
}
