class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  // template
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }
  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }
  protected send(data: string): void {
    console.log(`Отправляю ${data}`);
  }
}

class SecondAPI extends SaveForm<{ fullname: string }> {
  protected fill(form: Form): { fullname: string } {
    return { fullname: form.name };
  }
  protected send(data: { fullname: string }): void {
    console.log(`Отправляю ${JSON.stringify(data)}`);
  }
}

const form1 = new FirstAPI();
form1.save(new Form('Peter'));

const form2 = new SecondAPI();
form2.save(new Form('Nike'));
