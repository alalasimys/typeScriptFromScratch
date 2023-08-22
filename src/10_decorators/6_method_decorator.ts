interface IUserService6 {
  users: number;
  getUsersInDatabase(): number;
}

class UserService6 implements IUserService6 {
  users: number = 1000;

  @Log()
  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = () => {
      console.log('no error');
    };
  };
}

console.log(new UserService6().getUsersInDatabase());
