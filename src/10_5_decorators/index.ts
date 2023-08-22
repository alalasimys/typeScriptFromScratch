// Декоратор, который обавляет свойство createdAt в класс, фиксируя дату создания

interface IUserService {
  users: number;
  getUserInDataBase(): number;
}

@CreatedAt
class UserService implements IUserService {
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

console.log((new UserService() as IUserService & CreatedAt).createdAt);
