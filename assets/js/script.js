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

  //function to load tasks
  var loadTasks = function () {
    var nine = localStorage.getItem("9");
    $("#9").siblings(".time-block").val(nine);
    var ten = localStorage.getItem("10");
    $("#10").siblings(".time-block").val(ten);
    var eleven = localStorage.getItem("11");
    $("#11").siblings(".time-block").val(eleven);
    var twelve = localStorage.getItem("12");
    $("#12").siblings(".time-block").val(twelve);
    var one = localStorage.getItem("1");
    $("#1").siblings(".time-block").val(one);
    var two = localStorage.getItem("2");
    $("#2").siblings(".time-block").val(two);
    var three = localStorage.getItem("3");
    $("#3").siblings(".time-block").val(three);
    var four = localStorage.getItem("4");
    $("#4").siblings(".time-block").val(four);
    var five = localStorage.getItem("5");
    $("#5") .siblings(".time-block").val(five);
  };

    // tasks = JSON.parse(localStorage.getItem("tasks"));
    //   saveBtn.addEventListener('click', onClick)

// const button = document.querySelector('saveBtn');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });


// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

saveBtn.onclick = function(){
   saveBtn.addEventListener('click', function(){
       console.log('clicked')
   });
}

//saved events stay on the page after refresh
// event.preventDefault();

loadTasks();