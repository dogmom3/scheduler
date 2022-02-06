//variable declarations
var currentDay = document.getElementById('current-day');
var timeBlock = document.getElementsByClassName('time-block');
var saveBtn = document.getElementById('saveBtn');
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
// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

saveBtn.onclick = function(){};
   saveBtn.addEventListener('click', function(){
    localStorage.setItem('timeBlo

// var loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"));




//saved events stay on the page after refresh

