//variable declarations
var currentDay = document.getElementById('current-day');
var timeBlock = document.getElementsByClassName('time-block');
var saveBtn = document.getElementsByClassName('saveBtn');

//display todays date
const timeNow = new Date();
console.log(timeNow);
currentDay.textContent = timeNow

let hours = timeNow.getHours();


//function to load tasks
$('textarea').each(function () {

    if (hours < timeNow) {
        $('textarea').addClass('past');
        $('textarea').removeClass('present');
        $('textarea').removeClass('future');
    }
    else if (hours === timeNow) {
        $('textarea').addClass('present');
        $('textarea').removeClass('past');
        $('textarea').removeClass('future');
    }
    else {
        $('textarea').addClass('future');
        $('textarea').removeClass('past');
        $('textarea').removeClass('present');
    }
    var loadTask = localStorage.getItem($(this).siblings('h2').attr('id'))
    $(this).val(loadTask);
})


//save button click saves event to local storage
$('.saveBtn').click(function () {
    var saveTask = localStorage.setItem($(this).siblings('h2').attr('id'), $(this).siblings('.description').val());
    console.log('clicked');
});

