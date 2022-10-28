export class Poop {
  public _id: string;
  public name: string;
  public description: string;
  public rating: number;
  public date: Date;
  public fullAddr: string;
  public likes: number;
  public dislikes: number;
  public comments: CommentJ[];



  constructor(_id: string, name: string, description: string, rating: number, date: Date, fullAddr: string, likes: number, dislikes: number, comments: CommentJ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.date = date;
    this.fullAddr = fullAddr;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = [{
      _id: comments._id,
      user: comments.user,
      text: comments.text,
      date: comments.date,
      likes: comments.likes,
      dislikes: comments.dislikes,
      replies: comments.replies
    }]
  }


}

export interface CommentJ {
  _id: string;
  user: string;
  text: string;
  date: Date;
  likes: number;
  dislikes: number;
  replyClicked?: boolean;
  replies: Replies[];
}

export interface Replies {
  _id: string;
  user: string;
  text: string;
  date: Date;
  likes: number;
  dislikes: number;
}
