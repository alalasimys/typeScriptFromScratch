"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 3;
input = ['qwe', 'rty'];
// const response: string = input; //Type 'unknown' is not assignable to type 'string'.
const response = input; // Can be typified as any or unknown only
//error unknown in try{} catch(){}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            // error: unknown
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
//if input from api and not know type better to use unknown instead of any
function run(a) {
    if (typeof a === 'string') {
        return a.toLowerCase();
    }
}
