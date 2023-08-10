"use strict";
//for throwing error
function generateError(message) {
    throw new Error(message);
}
//for infinity circle
function dumpError() {
    while (true) { }
}
//for recursion
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default:
            const _ = action;
            throw new Error("Such action doesn't exist");
            break;
    }
}
//to except undefined returning
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
    else if (typeof value === 'number') {
        return false;
    }
    generateError("Type wasn't identified");
}
