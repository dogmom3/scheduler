//variable declarations
var currentDay = $('#current-day');
var timeBlock = $('.time-block');
var saveBtn = $('.saveBtn');


//display todays date
var timeNow = new Date();

currentDay.textContent = timeNow

let hours = timeNow.getHours();

//function to load tasks
$('textarea').each(function () {
    var currentTimeId = parseInt($(this).attr('id'))

    if (currentTimeId < hours) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    }
    else if (currentTimeId === hours) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
    }
    else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }
    var loadTask = localStorage.getItem($(this).siblings('h2').attr('id'))
    $(this).val(loadTask);
})

//save button click saves event to local storage
$('.saveBtn').click(function () {
    localStorage.setItem($(this).siblings('h2').attr('id'), $(this).siblings('.description').val());
    console.log('clicked');
});

