"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const userB = new UserBuilder().setName('Nike');
const adminB = new AdminBuilder().setName('Nike');
let userB1 = new UserBuilder();
if (userB1.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
