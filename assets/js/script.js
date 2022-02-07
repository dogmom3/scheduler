//variable declarations
var currentDay = document.getElementById('current-day');
var timeBlock = document.getElementsByClassName('time-block');
var saveBtn = document.getElementsByClassName('saveBtn');

//display todays date
const timeNow = new Date();
console.log(timeNow);
currentDay.textContent = timeNow

let hours = timeNow.getHours();

//organize time blocks by past present and future
if (hours < timeNow) {
    $(this).addClass('past');
}
else if (hours === currentDay) {
    $(this).addClass('present');
}
else {
    $(this).addClass('future');
}

    //save button click saves event to local storage
$('.saveBtn').on('click', function () {
    var saveTask = $(this)
   console.log('clicked');
    localStorage.setItem($('this').siblings('.hour').attr('id'), saveTask);
  });

  saveBtn.onclick = (){
    saveBtn.addEventListener('click', function(){
        e.event.preventDefault();
        localStorage.setItem()
        console.log('clicked')
    });

  //function to load tasks
  var loadTasks = function () {
      
    var nine = localStorage.getItem("9");
    
    var ten = localStorage.getItem("10");
  
    var eleven = localStorage.getItem("11");
   
    var twelve = localStorage.getItem("12");
   
    var one = localStorage.getItem("1");
   
    var two = localStorage.getItem("2");

    var three = localStorage.getItem("3");

    var four = localStorage.getItem("4");

    var five = localStorage.getItem("5");
    

    // tasks = JSON.parse(localStorage.getItem("tasks"));
    //   saveBtn.addEventListener('click', onClick)

// const button = document.querySelector('saveBtn');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });


// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };


}

saveBtn.onclick();
loadTasks();