interface User {
  name: string;
}

const someUser = {};

assertUser(someUser);
someUser.name = 'Peter';

function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Not an user');
}
