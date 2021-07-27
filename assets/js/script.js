

storageInit();
init();


function init() {
    var timeNow;
    var id;
    for (i = 9; i <= 17; i++) {
        timeNow = moment().format('h');
        id = "#hour-" + i;
        console.log(id)
        if (timeNow > i) {
            $(id).addClass("past");
        }
        else {
            if (timeNow == i) {
                $(id).addClass("present");
            }
            else {
                $(id).addClass("future");
            }
        }

    }
}

var tasks = [];

function displayTasks() {
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        $(task.id).children(".description").val(task.text);

    }
}

function storageInit() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(savedTasks);

    if (savedTasks !== null) {
        tasks = savedTasks;
        displayTasks();
    }
}