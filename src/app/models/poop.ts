export class Poop {
  public id: string;
  public name: string;
  public description: string;
  public rating: number;
  public date: Date;


  constructor(id: string, name: string, description: string, rating: number, date: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.date = date;
  }


}
