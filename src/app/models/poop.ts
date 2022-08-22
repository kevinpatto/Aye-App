export class Poop {
  public id: string;
  public name: string;
  public description: string;
  public rating: number;
  public date: Date;
  public fullAddr: string;

  constructor(id: string, name: string, description: string, rating: number, date: Date, fullAddr: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.date = date;
    this.fullAddr = fullAddr;
  }


}
