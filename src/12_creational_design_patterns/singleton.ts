class MyMap {
  private static instance: MyMap;

  map: Map<number, string> = new Map();

  private constructor() {} // private constructor forbid to create instance

  clean() {
    this.map = new Map();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance; // always return same Map
  }
}

class Service1 {
  addMap(key: number, value: string) {
    const myMap = MyMap.get(); // here we created myMap
    myMap.map.set(key, value);
  }
}

class Service2 {
  getKeys(key: number) {
    const myMap = MyMap.get();
    console.log(myMap.map.get(key)); // it's reference to myMap that was created at Service1
    myMap.clean();
    console.log(myMap.map.get(key));
  }
}

new Service1().addMap(1, 'Работает!');
new Service2().getKeys(1);
