//variable declarations
var currentDay = document.getElementById('current-day');
var timeBlock = document.getElementsByClassName('time-block');
var saveBtn = document.getElementsByClassName('saveBtn');
//display todays date

const timeNow = new Date();
console.log(timeNow);
currentDay.textContent = timeNow

//organize time blocks by past present and future
// if (timeBlock < currentDay) {
//     ().addClass('past');
// }
// else if (timeBlock === currentDay) {
//     ().addClass('present');
// }
// else {
//     ().addClass('future');
// }

//save button click saves event to local storage

$( ".saveBtn" ).on( "click", notify );
  function notify() {
   console.log('clicked')
  }
  function onClick(){
    localStorage.setItem('timeBlock')
  };

//   saveBtn.addEventListener('click', onClick)

// const button = document.querySelector('saveBtn');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });


// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// saveBtn.onclick = function(){};
//    saveBtn.addEventListener('click', function(){
//        console.log('clicked')

//     

// var loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"));




//saved events stay on the page after refresh
// event.preventDefault();

