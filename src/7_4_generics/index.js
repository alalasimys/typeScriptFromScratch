"use strict";
// 1
function toString(value) {
    if (Array.isArray(value)) {
        return value.toString();
    }
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return value.toString();
        case 'object':
            return JSON.stringify(value);
        default:
            return undefined;
    }
}
// 2
const data = [
    { id: 1, name: 'Peter' },
    { id: 4, name: 'Sam' },
    { id: 2, name: 'Mike' },
    { id: 5, name: 'Brad' },
    { id: 3, name: 'John' },
];
function sort(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data));
console.log(sort(data, 'desc'));
