class Notify {
  send(template: string, to: string) {
    console.log(`Отправляю ${template}: ${to}`);
  }
}

class LogNotification {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: 'other', template: '<h1>Шаблон!</h1>' }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: LogNotification;
  private template: Template;

  constructor() {
    this.notify = new Notify(); // create classes instance
    this.template = new Template();
    this.logger = new LogNotification();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log('Не найден шаблон');
      return;
    }
    this.notify.send(data.template, to); // method's using instance's methods
    this.logger.log('Шаблон отправлен');
  }
}

const s = new NotificationFacade();
s.send('a@a.ru', 'other');
