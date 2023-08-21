interface IData {
  group: number;
  name: string;
}
const groupData: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((groupMap: IGroup<T>, item) => {
    const itemKey = item[key];
    let currentEl = groupMap[itemKey];
    if (Array.isArray(currentEl)) {
      currentEl.push(item);
    } else {
      currentEl = [item];
    }
    groupMap[itemKey] = currentEl;
    return groupMap;
  }, {});
}

console.log(group<IData>(groupData, 'group'));
