

storageInit();
init();


function init() {
    var timeNow;
    var id;
    for (i = 9; i <= 17; i++) {
        timeNow = moment().format('HH');
        id = "#hour-" + i;
        
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

var tasks = [{ 
    id: "#hour-9",
    text: "",
  }  , { 
    id: "#hour-10",
    text: "",
  }, { 
    id: "#hour-11",
    text: "",
  }, { 
    id: "#hour-12",
    text: "",
  }, { 
    id: "#hour-13",
    text: "",
  }, { 
    id: "#hour-14",
    text: "",
  }, { 
    id: "#hour-15",
    text: "",
  }, { 
    id: "#hour-16",
    text: "",
  }, { 
    id: "#hour-17",
    text: "",
  }]; 
  

function displayTasks() {
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        $(task.id).children(".description").val(task.text);

    }
}

function storageInit() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    

    if (savedTasks !== null) {
        tasks = savedTasks;
        displayTasks();
    }
}


function storeTask(i){
  var taskContent=$(tasks[i].id).children(".description").val();

  tasks[i].text=taskContent;
  console.log(taskContent);
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}