var currentDay = $('#current-day');
var timeBlock = $('.time-block');
var saveBtn = $('.saveBtn');
var timeNow = new Date();
currentDay.text(timeNow)
let hours = timeNow.getHours();

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
    var loadTask = localStorage.getItem($(this).attr('id'))
    $(this).val(loadTask);
})

$('.saveBtn').click(function () {
    console.log($(this).siblings('textarea').attr('id'))
    console.log( $(this).siblings('.time-block').val())
    localStorage.setItem($(this).siblings('textarea').attr('id'), $(this).siblings('.time-block').val());
    console.log('clicked');
});

