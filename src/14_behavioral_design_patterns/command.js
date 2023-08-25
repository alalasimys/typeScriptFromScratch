var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User4 = /** @class */ (function () {
    function User4(userId) {
        this.userId = userId;
    }
    return User4;
}());
var CommandHistory = /** @class */ (function () {
    function CommandHistory() {
        this.commands = [];
    }
    CommandHistory.prototype.push = function (command) {
        this.commands.push(command);
    };
    CommandHistory.prototype.remove = function (command) {
        this.commands = this.commands.filter(function (c) { return c.commandId !== command.commandId; });
    };
    return CommandHistory;
}());
var Command = /** @class */ (function () {
    function Command(history) {
        this.history = history;
        this.commandId = Math.random();
    }
    return Command;
}());
var AddUserCommand = /** @class */ (function (_super) {
    __extends(AddUserCommand, _super);
    function AddUserCommand(user, receiver, history) {
        var _this = _super.call(this, history) || this;
        _this.user = user;
        _this.receiver = receiver;
        return _this;
    }
    AddUserCommand.prototype.execute = function () {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    };
    AddUserCommand.prototype.undo = function () {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    };
    return AddUserCommand;
}(Command));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.saveUser = function (user) {
        console.log("\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id ".concat(user.userId));
    };
    UserService.prototype.deleteUser = function (userId) {
        console.log("\u0423\u0434\u0430\u043B\u044F\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id ".concat(userId));
    };
    return UserService;
}());
var UserServiceController = /** @class */ (function () {
    function UserServiceController() {
        this.history = new CommandHistory();
    }
    UserServiceController.prototype.addReceiver = function (receiver) {
        this.receiver = receiver;
    };
    UserServiceController.prototype.run = function () {
        var addUserCommand = new AddUserCommand(new User4(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    };
    return UserServiceController;
}());
var userServiceController = new UserServiceController();
userServiceController.addReceiver(new UserService());
userServiceController.run();
