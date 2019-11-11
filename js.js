
    window.onload = function () {

        setTimeout("switchImage()", 5000);
       
    }
    var current = 1;
    
    var num_image = 7;

    function switchImage() {
        current++;
        document.images['image_vh'].src = './images/vh' + current + '.jpg'; 
        document.images['image_s'].src = './images/s' + current + '.jpg';
        document.images['image_hh'].src = './images/hh' + current + '.jpg';

        if (current < num_image) {
            setTimeout("switchImage()", 5000);

        } else if (current == num_image) {

            current = 1;
            setTimeout("switchImage()", 5000);
        }      
        
    }

    var dateWedding = {
        year: 2018,
        month: 1,
        date: 11,
        hour: 9,
        minutes: 59,
        second: 59,
    }
    var dateAnniver = {
        year: 2018,
        month: 1,
        date: 11,
        hour: 24,
        minutes: 00,
        second: 00,
    }

    setInterval(function () {
        var today = new Date();

        // will be organization
        if (today.getFullYear() - dateWedding.year < 0) {
            if (today.getMonth() + 1 - dateWedding.month >= 0) {
                if (today.getDate() - dateWedding.date >= 0) {
                    var date = (today.getFullYear() - dateWedding.year + 1) + " Years " + (12 - (today.getMonth() + 1 - dateWedding.month) - 1) + " Months " + (30 - (today.getDate() - dateWedding.date)) + " Dates " + Math.abs((dateWedding.hour - today.getHours())) + " Hours " + Math.abs((today.getMinutes() - dateWedding.minutes)) + " Minutes " + (Math.abs(today.getSeconds() - dateWedding.second) + "Will be Organization");
                    
                }
                else {
                    var date = ((today.getFullYear() - dateWedding.year + 1)) + " Years " + (12 - (today.getMonth() + 1 - dateWedding.month)) + " Months " + Math.abs((today.getDate() - dateWedding.date)) + " Dates " + Math.abs((dateWedding.hour - today.getHours())) + " Hours " + Math.abs((today.getMinutes() - dateWedding.minutes)) + " Minutes " + (Math.abs(today.getSeconds() - dateWedding.second) + " Will be Organization");
                   
                }
            }
        }
        // anniversary
        if (today.getFullYear() - dateAnniver.year > 0) {
            if (today.getMonth() + 1 - dateAnniver.month >= 0) {
                if (today.getDate() - dateAnniver.date >= 0) {
                    var date = (today.getFullYear() - dateAnniver.year) + " Years " + (today.getMonth() + 1 - dateAnniver.month) + " Months " + (today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");

                } else {
                    var date = ((today.getFullYear() - dateAnniver.year)) + " Years " + (today.getMonth() - dateAnniver.month) + " Months " + (30 + today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");
                }
            }

            else if (today.getMonth() + 1 - dateAnniver.month < 0) {
                if (today.getDate() - dateAnniver.date < 0) {

                    var date = ((today.getFullYear() - dateAnniver.year) - 1) + " Years " + (12 + (today.getMonth() - dateAnniver.month)) + " Months " + (30 + today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");

                }
                else {
                    var date = ((today.getFullYear() - dateAnniver.year) - 1) + " Years " + (12 + (today.getMonth() - dateAnniver.month + 1)) + " Months " + (today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");
                    console.log("a")
                }
            }
        }

        if (today.getFullYear() - dateAnniver.year === 0) {
            if (today.getMonth() + 1 - dateAnniver.month >= 0) {
                if (today.getDate() - dateAnniver.date >= 0) {
                    var date = (today.getMonth() + 1 - dateAnniver.month) + " Months " + (today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");

                } else {
                   
                    var date =(today.getMonth() - dateAnniver.month) + " Months " + (30 + today.getDate() - dateAnniver.date) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Second Wedding Anniversary");
                }
            }
            else if (today.getMonth() + 1 - dateAnniver.month < 0) {
                if (today.getDate() - dateAnniver.date < 0) {
                    var date =(Math.abs((today.getMonth()+1 - dateAnniver.month))) + " Months " + Math.abs((today.getDate() - dateAnniver.date)) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Will be Organization");
                }
                else {
                    var date =(Math.abs((today.getMonth()+1 - dateAnniver.month)))-1 + " Months " + (30-(today.getDate() - dateAnniver.date)) + " Dates " + (dateAnniver.hour - today.getHours()) + " Hours " + (today.getMinutes() - dateAnniver.minutes) + " Minutes " + (today.getSeconds() - dateAnniver.second + " Will be Organization");
                    console.log("a")
                }
            }
        }

        document.getElementById("countDown").innerHTML = date;
    }, 1000);
