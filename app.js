function timeDisplay(){
    let currTime = new Date();
    let hours = currTime.getHours(); 
    let mins = currTime.getMinutes(); 
    let secs = currTime.getSeconds(); 
    // let mili = currTime.getMilliseconds(); 
    let amPM = 'AM';
    
    if(hours === 0){
        hours = 12;
        // let amPM = 'AM';
    } else if (hours > 12){
        hours -= 12;
        amPM = 'PM';
    }

    hours = (hours < 10) ? '0' + hours : hours;
    mins = (mins < 10) ? '0' + mins : mins;
    secs = (secs < 10) ? '0' + secs : secs;
    
    let display = document.querySelector('#clock').innerHTML = `${hours}:${mins}:${secs}:${amPM}`;

    setTimeout(timeDisplay, 1000);
}

timeDisplay();