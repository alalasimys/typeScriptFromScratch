"use strict";
const someUser = {};
assertUser(someUser);
someUser.name = 'Peter';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not an user');
}
