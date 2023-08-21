class User1 {
  id: number;
  name: string;
}

class UserPersistent extends User1 {
  dbId: string;
}

type UserPersistentType<T extends string | number> = T extends number
  ? User1
  : UserPersistent;

function getUser2<T extends string | number>(id: T): UserPersistentType<T> {
  if (typeof id === 'number') {
    return new User1() as UserPersistentType<T>;
  } else {
    return new UserPersistent() as UserPersistentType<T>;
  }
}

const res1 = getUser2(1);
const res2 = getUser2('sdfsfd');
