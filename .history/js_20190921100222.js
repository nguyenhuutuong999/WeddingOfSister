
    window.onload = function () {

        setTimeout("switchImageVH()", 5000);
        setTimeout("switchImageS()", 5000);
        setTimeout("switchImageHH()", 5000);
    }
    var current_vh = 1;
    var current_s = 1;
    var current_hh = 1;
    var num_image = 7;

    function switchImageVH() {
        current_vh++;
        document.images['image_vh'].src = './images/vh' + current_vh + '.jpg';

        if (current_vh < num_image) {
            setTimeout("switchImageVH()", 5000);

        } else if (current_vh == num_image) {

            current_vh = 1;
            setTimeout("switchImageVH()", 5000);
        }


    }
    function switchImageS() {
        current_s++;
        document.images['image_s'].src = './images/s' + current_s + '.jpg';

        if (current_s < num_image) {
            setTimeout("switchImageS()", 5000);

        } else if (current_s == num_image) {
            current_s = 1;
            setTimeout("switchImageS()", 5000);
        }
    }
    function switchImageHH() {
        current_hh++;
        document.images['image_hh'].src = './images/hh' + current_hh + '.jpg';

        if (current_hh < num_image) {
            setTimeout("switchImageHH()", 5000);

        } else if (current_hh == num_image) {
            current_hh = 1;
            setTimeout("switchImageHH()", 5000);
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



    // var canvas = document.getElementById('myCanvas');
    // var context = canvas.getContext('2d');

    // // Xác đinh tâm là trọng tâm của Canvas
    // var x = canvas.width / 2;
    // var y = canvas.height / 2;

    // // bán kính 75px
    // var radius = 130;

    // // Góc bắt đầu là 1.1PI
    // var startAngle = 1.1 * Math.PI;

    // // Góc kết thúc là 1.9PI
    // var endAngle = 1.9 * Math.PI;

    // // Cùng chiều kim đồng hồ
    // var counterClockwise = false;

    // // Vẽ đường cung
    // context.beginPath();
    // context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    // context.lineWidth = 1.5;

    // // line color
    // context.strokeStyle = 'blanchedalmond';
    // context.stroke();


</script>