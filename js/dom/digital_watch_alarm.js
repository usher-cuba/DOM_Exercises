const d = document;

export function digitalWatch(watch, btnStartWatch, btnStopWatch){
    let tempWatch;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnStartWatch)){
            tempWatch= setInterval(() => {
                let watchHour = new Date().toLocaleTimeString();
                d.querySelector(watch).innerHTML = `<h3>${watchHour}</h3>`; 
            }, 1000);
            e.target.disabled = true;    
        }

        if(e.target.matches(btnStopWatch)){
            clearInterval(tempWatch);
            d.querySelector(watch).innerHTML = null;
            d.querySelector(btnStartWatch).disabled = false;
        }
    });
}


export function alarmWatch(sound, btnStartAlarm, btnStopAlarm){
    let tempAlarm;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnStartAlarm)){
            tempAlarm = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true;    
        }

        if(e.target.matches(btnStopAlarm)){
            clearTimeout(tempAlarm);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnStartAlarm).disabled = false;
        }
    });

}