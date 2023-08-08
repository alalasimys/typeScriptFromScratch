//for throwing error
function generateError(message: string): never {
  throw new Error(message);
}

//for infinity circle
function dumpError(): never {
  while (true) {}
}

//for recursion
function rec(): never {
  return rec();
}

//for minimizing run time error if type was extended
type PaymentAction = 'refund' | 'checkout'; // | 'reject'

function processAction(action: PaymentAction) {
  switch (action) {
    case 'refund':
      //...
      break;
    case 'checkout':
      //...
      break;
    default:
      const _: never = action;
      throw new Error("Such action doesn't exist");
      break;
  }
}

//to except undefined returning
function isString(value: string | number): boolean {
  if (typeof value === 'string') {
    return true;
  } else if (typeof value === 'number') {
    return false;
  }
  generateError("Type wasn't identified");
}
