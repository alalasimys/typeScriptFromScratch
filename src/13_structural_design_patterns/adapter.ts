class KVDatabase {
  // Custom Data Base
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistentDB {
  // Third party library Data Base
  savePersistent(data: Object) {
    console.log(data);
  }
}

class PersistentDBAdapter extends KVDatabase {
  // Adapter extends Custom DB to save
  constructor(public database: PersistentDB) {
    super();
  }

  override save(key: string, value: string): void {
    // overwrite KVDatabase save method to use PersistentDB
    this.database.savePersistent({ key, value });
  }
}

function run(base: KVDatabase) {
  base.save('key', 'myValue');
}
// wrap library class with adapter to use function that used KVDatabase before
run(new PersistentDBAdapter(new PersistentDB()));
