interface User {
  name: string;
  age?: number;
  email: string;
}

type partial = Partial<User>; // make all properties optional
const p: partial = {};

type required = Required<User>; // make all properties required
type readonly = Readonly<User>; // make all properties readonly
type requiredAndReadonly = Required<Readonly<User>>; // can be mixed

interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type PaymentOmit = Omit<PaymentPersistent, 'id'>; // omit property from Type
type PaymentRequests = Pick<PaymentPersistent, 'from' | 'to'>; // pick property from Type

type ExtractEx = Extract<'from' | 'to' | PaymentOmit, string>; // Extract<Type, Union> extract only selected members
type ExcludeEx = Exclude<'from' | 'to' | PaymentOmit, string>; // Exclude<UnionType, ExcludedMembers>

class User3 {
  constructor(public id: number, public name: string) {}
}

function getData1(id: number): User3 {
  return new User3(id, 'Nike');
}

type RT = ReturnType<typeof getData1>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof getData1>[0];

type CP = ConstructorParameters<typeof User>;
type IT = InstanceType<typeof User>;

type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
  name: string;
  url: string;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: 'Аналитика', url: 'analytics' }];
}

type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
  return [await x];
}
// output before Awaited
async function getArray2<T>(x: T): Promise<T[]> {
  return [await x];
}
