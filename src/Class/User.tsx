interface notes {
  name: string;
  picture?: string;
  date: string;
  favorite: boolean;
  saved: boolean;
  content: string;
}
export class User {
  static created = 0;
  static Notes: notes[] = [];

  constructor(
    public email: string,
    public name: string,
    public password: string,
    public profile?: string
  ) {
    User.created = +1;
  }
  add(note: notes): void {
    User.Notes.push(note);
  }
  remove(i: number): void {
    User.Notes.slice(i, i + 1);
  }
}
