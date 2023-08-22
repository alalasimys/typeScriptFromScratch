// Декоратор, который обавляет свойство createdAt в класс, фиксируя дату создания

interface IUserService5 {
  users: number;
  getUserInDataBase(): number;
}

@CreatedAt
class UserService5 implements IUserService5 {
  users: number = 1000;

  getUserInDataBase(): number {
    return this.users;
  }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

type CreatedAt = {
  createdAt: Date;
};

console.log((new UserService5() as IUserService5 & CreatedAt).createdAt);
