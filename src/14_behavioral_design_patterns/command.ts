class User4 {
  constructor(public userId: number) {}
}

class CommandHistory {
  public commands: Command[] = [];

  push(command: Command) {
    this.commands.push(command);
  }

  remove(command: Command) {
    this.commands = this.commands.filter(
      (c) => c.commandId !== command.commandId
    );
  }
}

abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: User4,
    private receiver: UserService,
    history: CommandHistory
  ) {
    super(history);
  }

  execute(): void {
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }

  undo() {
    this.receiver.deleteUser(this.user.userId);
    this.history.remove(this);
  }
}

class UserService {
  saveUser(user: User4) {
    console.log(`Сохраняю пользователя с id ${user.userId}`);
  }

  deleteUser(userId: number) {
    console.log(`Удаляем пользователя с id ${userId}`);
  }
}

class UserServiceController {
  receiver: UserService;
  history: CommandHistory = new CommandHistory();

  addReceiver(receiver: UserService) {
    this.receiver = receiver;
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new User4(1),
      this.receiver,
      this.history
    );

    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const userServiceController = new UserServiceController();
userServiceController.addReceiver(new UserService());
userServiceController.run();
//output
// UserService called run() in UserServiceController
/*
Сохраняю пользователя с id 1 
<ref *1> CommandHistory {
  commands: [
    AddUserCommand {
      history: [Circular *1],
      commandId: 0.8446019711294952,
      user: [User4],
      receiver: UserService {}
    }
  ]
}
Удаляем пользователя с id 1
CommandHistory { commands: [] }
*/
