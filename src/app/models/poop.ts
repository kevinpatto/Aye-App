export class Poop {
  public _id: string;
  public name: string;
  public description: string;
  public rating: number;
  public date: Date;
  public fullAddr: string;
  public likes: number;
  public dislikes: number;

  constructor(_id: string, name: string, description: string, rating: number, date: Date, fullAddr: string, likes: number, dislikes: number) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.date = date;
    this.fullAddr = fullAddr;
    this.likes = likes;
    this.dislikes = dislikes;
  }


}
