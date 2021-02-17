
    var offset = 0;   

    setInterval(showTime, 1000);

    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')
    
    
    
    function ValidateForm(){       
        var radioButtons = document.getElementsByName("time_zone");
        var timeZone=radioButtons[0].value; 
        console.log(timeZone);         
        //the content of your function will go here           
        console.log(radioButtons);
        for (var i = 0; i < radioButtons.length; i++) 
        {
            if (radioButtons[i].checked == true)
            {
                //act ions go here
                timeZone = radioButtons[i].value;
               // document.getElementById("result").innerHTML= timeZone;
                break;  
            }
        }
        if (timeZone == "est"){
            offset = 0;
        }else if (timeZone == "cst"){
            offset = 1;
        }else if (timeZone == "mst"){
            offset =  2;
        }else if (timeZone == "pst"){
            offset =  3;
        }else if (timeZone == "ast"){
            offset =  4;
        }else if (timeZone == "hst"){
            offset =  5;
        }
        displayTime();
        showTime();
    }

    function displayTime(){
        var myDate = new Date();
        console.log(myDate);
        var hour = myDate.getHours() - offset;
        var minute = myDate.getMinutes();
        var second = myDate.getSeconds();
        var ampm = "AM";

        // Display the 12 hr clock
        if (hour == 0) {
            hour = 12;
        }
        if (hour > 12){
            hour = hour - 12;
            ampm = "PM";
        }
        if ( hour < 10)
        {
            hour = "0" + hour;
        }
        if ( minute < 10)
        {
            minute = "0" + minute;
        }
        if ( second < 10)
        {
            second = "0" + second;
        }
        //concatenate the time into a single string
        var time = hour + ":" + minute + ":" + second + "  " + ampm;
        //this makes sure the time is updated every second
      //  document.getElementById("showtime").innerText = time; 
        document.getElementById("digital clock").innerText = time;  
        setTimeout(displayTime,1000); 
    }
    
   

    function showTime(){
        const day = new Date ();
        const secondsRatio = day.getSeconds()/60;
        const minutesRatio = (day.getMinutes() + secondsRatio) /60;
        const hoursRatio = (day.getHours() + minutesRatio + offset) / 12; 

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);

    }
    function setRotation(element, rotationRatio){
        element.style.setProperty(`--rotation`, rotationRatio * 360);
    }
    showTime();
    displayTime();

