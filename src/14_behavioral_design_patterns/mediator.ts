interface Mediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: Mediator;
  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log('Отправляю уведомление');
  }
}

class LogNotifications {
  log(message: string) {
    console.log(message);
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}

class NotificationMediator implements Mediator {
  constructor(
    public notifications: Notifications,
    public logger: LogNotifications,
    public handler: EventHandler
  ) {}

  notify(_: string, event: string): void {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log('Отправлено');
        break;
    }
  }
}

const handler = new EventHandler();
const logNotifications = new LogNotifications();
const notifications = new Notifications();

const mediator = new NotificationMediator(
  notifications,
  logNotifications,
  handler
);
handler.setMediator(mediator);
handler.myEvent();
