interface IUserService8 {
  users: number;
  getUsersInDatabase(): number;
}

class UserService8 implements IUserService8 {
  @Max(100)
  users: number;

  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      } else {
        value = newValue;
      }
    };

    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}
const userService8 = new UserService8();
userService8.users = 1;
console.log(userService8.users);
userService8.users = 1000;
console.log(userService8.users);
