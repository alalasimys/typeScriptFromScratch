interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

let userHistory = new UserHistory('a@a.ru', 'Антон');
console.log(userHistory);
let userHistory2 = userHistory.clone(); // create the same instance userHistory
userHistory2.email = 'b@b.ru';
console.log(userHistory2);
console.log(userHistory);
