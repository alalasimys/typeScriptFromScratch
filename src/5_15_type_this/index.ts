class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const userB = new UserBuilder().setName('Nike');
const adminB = new AdminBuilder().setName('Nike');

let userB1: UserBuilder | AdminBuilder = new UserBuilder();

if (userB1.isAdmin()) {
  console.log(user);
} else {
  console.log(user);
}
