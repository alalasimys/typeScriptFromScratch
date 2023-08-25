var Task = /** @class */ (function () {
    function Task(priority) {
        this.priority = priority;
        this.priority = priority;
    }
    return Task;
}());
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.sortByPriority = function () {
        this.tasks = this.tasks.sort(function (a, b) {
            if (a.priority > b.priority) {
                return 1;
            }
            else if (a.priority == b.priority) {
                return 0;
            }
            else {
                return -1;
            }
        });
    };
    TaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskList.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskList.prototype.count = function () {
        return this.tasks.length;
    };
    TaskList.prototype.getIterator = function () {
        return new PriorityTaskIterator(this); //create iterator
    };
    return TaskList;
}());
var PriorityTaskIterator = /** @class */ (function () {
    function PriorityTaskIterator(taskList) {
        this.position = 0;
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    PriorityTaskIterator.prototype.current = function () {
        return this.taskList.getTasks()[this.position];
    };
    PriorityTaskIterator.prototype.next = function () {
        this.position += 1;
        return this.taskList.getTasks()[this.position];
    };
    PriorityTaskIterator.prototype.prev = function () {
        this.position -= 1;
        return this.taskList.getTasks()[this.position];
    };
    PriorityTaskIterator.prototype.index = function () {
        return this.position;
    };
    return PriorityTaskIterator;
}());
var taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));
var iterator = taskList.getIterator();
console.log(iterator.current()); // Task { priority: 1 }
console.log(iterator.next()); // Task { priority: 3 }
console.log(iterator.next()); // Task { priority: 8 }
console.log(iterator.prev()); // Task { priority: 3 }
console.log(iterator.index()); // 1
