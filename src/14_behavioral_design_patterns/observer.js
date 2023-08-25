var Lead = /** @class */ (function () {
    function Lead(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    return Lead;
}());
var NewLead = /** @class */ (function () {
    function NewLead() {
        this.observers = [];
    }
    NewLead.prototype.attach = function (observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    };
    NewLead.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    };
    NewLead.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return NewLead;
}());
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.update = function (subject) {
        console.log("NotificationService \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435");
        console.log(subject);
    };
    return NotificationService;
}());
var LeadService = /** @class */ (function () {
    function LeadService() {
    }
    LeadService.prototype.update = function (subject) {
        console.log("LeadService \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435");
        console.log(subject);
    };
    return LeadService;
}());
var subject = new NewLead();
subject.state = new Lead('Антон', '00000');
var subscriber1 = new NotificationService();
var subscriber2 = new LeadService();
subject.attach(subscriber1);
subject.attach(subscriber2);
subject.notify();
subject.detach(subscriber1);
subject.detach(subscriber2);
subject.notify();
