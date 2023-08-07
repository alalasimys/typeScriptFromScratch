let input: unknown;

input = 3;
input = ['qwe', 'rty'];

// const response: string = input; //Type 'unknown' is not assignable to type 'string'.
const response: any = input; // Can be typified as any or unknown only

//error unknown in try{} catch(){}
async function getData() {
  try {
    await fetch('');
  } catch (error) {
    // error: unknown
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch('');
  } catch (error) {
    console.log((error as Error).message);
  }
}

//if input from api and not know type better to use unknown instead of any
function run(a: unknown) {
  if (typeof a === 'string') {
    return a.toLowerCase();
  }
}
