$(document).ready(function () {
    debugger;
    getData();
});

function getData() {
    //var url = "https://tours.dynamics365portals.us/_odata/apps";
    var url = "https://receptiontours.state.gov/_odata/apps";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            debugger;
            formatData(response);
        },
        failure: function (response) {
        }
    });
}

function formatData(response) {
    var calData = [];
    calData.splice(0,calData.length);
    for (var i = 0; i < response.value.length; i++) {
        calData.push({
            title: (25 - response.value[i].us_totalattendees) + " Remaining",
            start: response.value[i].scheduledstart,
            end: response.value[i].scheduledend
        });
    }

    createCalendar(calData);
}

function createCalendar(calData) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var formToday = yyyy + '-' + mm + '-' + dd;
    $('#calendar').fullCalendar({
        theme: true,
        header: {
            left: 'prev,next today',
            center: 'title',
			      right: ''
            //right: 'month,agendaWeek,agendaDay,listMonth'
        },
        //defaultDate: '2017-02-12',
        defaultDate: formToday,
        navLinks: false, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
    		weekends: false,
        events: calData,
		    eventClick: function(calEvent, jsEvent, view) {
			    			    //window.location.href = "https://tours.dynamics365portals.us/request-tour/";
			    			    window.location.href = "https://receptiontours.state.gov/request-tour/";
                    }
    });
}// JavaScript source code
