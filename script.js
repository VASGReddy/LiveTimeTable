function displayTime(){
    /* const [month, day, year, day] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getDay()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]; */
    const date = new Date();
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let seconds = date.getSeconds(); // 0-59
    let merediem = (hours < 12) ? 'AM':'PM';
    if(hours === 0){
        hours = 12;
        //merediem = 'AM';
    }
    if(hours > 12){
        hours = hours-12;
    }
    //Converting into HH, MM, SS incase of H, M, S
    if( hours < 10 ) hours = `0${hours}`;
    if( minutes < 10 ) minutes = `0${minutes}`;
    if( seconds < 10 ) seconds = `0${seconds}`;

    let time = `${hours}:${minutes}:${seconds} ${merediem}`;
    document.getElementById('displaytime').innerText = time;
    setTimeout(displayTime, 1000);
}
displayTime();

//Highlighting Cells
function highlightCell() {
    const date = new Date(); // Example : 'Sun Dec 19 2021 20:28:42 GMT+0530 (India Standard Time)'
    let day = date.getDay(); // 0-6
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    //let seconds = date.getSeconds(); // 0-59

    if (hours < 10 || hours >= 17){
        document.getElementById("Heading").innerHTML = "Open This Page In Between 10:00 AM - 5:00 PM <br> SEM III - TimeTable";
    }

    //Lunch Break
    if (day !== 0){
        if (hours === 13){
            if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('LunchBreak').className = "ActiveSubjectOutline";
                }
        }
    }

    //Monday
    if (day === 1){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Mon1').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 11){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Mon2').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 12){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Mon3').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 14){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Mon4').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 15 || hours === 16){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Mon56').className = "ActiveSubjectOutline";
            }
        }
    }

    //Tuesday
    else if (day === 2){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Tue1').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 11){
                if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('Tue2').className = "ActiveSubjectOutline";
                }
        }
        else if (hours === 12){
                if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('Tue3').className = "ActiveSubjectOutline";
                }
        }
        else if (hours === 14){
                if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('Tue4').className = "ActiveSubjectOutline";
                }
        }
        else if (hours === 15){
                if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('Tue5').className = "ActiveSubjectOutline";
                }
        }
        else if (hours === 16){
                if (minutes >= 0 && minutes <= 59 ){
                    document.getElementById('Tue6').className = "ActiveSubjectOutline";
                }
        }
    }

    //Wednesday
    else if (day === 3){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Wed1').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 11){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Wed2').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 12){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Wed3').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 14){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Wed4').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 15 || hours === 16){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Wed56').className = "ActiveSubjectOutline";
            }
        }
    }

    //Thursday
    else if (day === 4){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59){
                document.getElementById('Thu1').className = "ActiveSubjectOutline";
            }
        }
        if (hours === 11){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Thu2').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 12){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Thu3').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 14){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Thu4').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 15){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Thu5').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 16){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Thu6').className = "ActiveSubjectOutline";
            }
        }
    }

    //Friday
    else if (day === 5){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Fri1').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 11){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Fri2').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 12){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Fri3').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 14){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Fri4').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 15 || hours === 16){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Fri56').className = "ActiveSubjectOutline";
            }
        }
    }

    //Saturday
    else if (day === 6){
        if (hours === 10){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Sat1').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 11){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Sat2').className = "ActiveSubjectOutline";
            }

        }
        else if (hours === 12){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Sat3').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 14){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Sat4').className = "ActiveSubjectOutline";
            }
        }
        else if (hours === 15 || hours === 16){
            if (minutes >= 0 && minutes <= 59 ){
                document.getElementById('Sat56').className = "ActiveSubjectOutline";
            }
        }
    }

    setTimeout(highlightCell, 1000);
}
highlightCell();
