// /// Business Logic for TODOLIST ---------
// function TODOLIST() {
//     this.tasks = {};
//     this.currentId = 0;
// }
// TODOLIST.prototype.assignId = function () {
//     this.currentId += 1;
//     return this.currentId;
// };
// TODOLIST.prototype.addList = function (task) {
//     task.id = this.assignId();
//     this.tasks[task.id] = task;
// }
// TODOLIST.prototype.findList = function (id) {
//     if (this.tasks[id] != undefined) {
//         return this.tasks[id];
//     }
//     return false;
// };

// TODOLIST.prototype.deleteList = function (id) {
//     if (this.tasks[id] === undefined) {
//         return false;
//     }
//     delete this.tasks[id];
//     return true;
// };


// function Task(event, date, time) {
//     this.event = event;
//     this.date = date;
//     this.time = time;
// }


// function displayTaskDetails(listToDisplay) {
//     let tasksList = $("ul#tasks");
//     let htmlForTaskInfo = "";
//     Object.keys(listToDisplay.tasks).forEach(function (key) {
//         const task = listToDisplay.findList(key);
//         htmlForTaskInfo += "<li id=" + task.id + ">" + task.event  + "</li>";
//     });
//     tasksList.html(htmlForTaskInfo);
// }

// function attachTaskListeners() {
//     $("ul#tasks").on("click", "li", function () {
//         showTask(this.id);
//     });
//     $("#buttons").on("click", "button", function () {
//         list.deleteList(this.id);
//         $("#show-task").hide();
//         displayTaskDetails(list);
//     });
// }

// function showTask(taskId) {
//     const task = list.findList(taskId);
//     $("#show-task").show();
//     $(".event").html(task.event);
//     $(".date").html(task.date);
//     $(".time").html(task.time);
//     let buttons = $("#buttons");
//     buttons.empty();
//     buttons.append("<button class='btn btn-primary' id=" + + task.id + ">Delete</button>");
// }
// // User Interface Logic ---------
// let list = new TODOLIST();

// $(document).ready(function () {
//     attachTaskListeners();
//     $("form#new-task").submit(function (event) {
//         event.preventDefault();
//         const inputtedEvent = $("input#event").val();
//         const inputtedDate = $("input#date").val();
//         const inputtedTime = $("input#time").val();

//         // The next three lines are new:
//         // $("input#new-first-name").val("");
//         // $("input#new-last-name").val("");
//         // $("input#new-phone-number").val("");

//         let newTask = new Task(inputtedEvent, inputtedDate, inputtedTime);
//         list.addList(newTask);
//         displayTaskDetails(list);
//     });
// });

