interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return;
    }
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NotificationService implements Observer {
  update(subject: Subject): void {
    console.log(`NotificationService получил уведомление`);
    console.log(subject);
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log(`LeadService получил уведомление`);
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead('Антон', '00000');
const subscriber1 = new NotificationService();
const subscriber2 = new LeadService();

subject.attach(subscriber1);
subject.attach(subscriber2);
subject.notify();
subject.detach(subscriber1);
subject.detach(subscriber2);
subject.notify();
