const d = document;

export function countdown(countdownArea, limitDate, finalMessage, sound){

    const $countdownArea = d.getElementById(countdownArea);
    const $countdownDate = new Date(limitDate).getTime();
    const $happyBirthdaySong = d.createElement("audio");
    $happyBirthdaySong.src = sound;

    let countdownTemp = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = $countdownDate - now;
        let days, hours, mins, seconds;

        days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
        mins = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countdownArea.innerHTML = `<h3>There are left:
        ${days} days, ${hours} hours, ${mins} minutes, ${seconds} seconds</h3>`;

        //console.log($countdownDate, now, limitTime);

        if(limitTime < 0){
            clearInterval(countdownTemp);
            $countdownArea.innerHTML = `<h3>${finalMessage}</h3>`;
            $happyBirthdaySong.play();
        }
    }, 1000);


    
    /* let today = new Date().getTime() - date.getTime();
    const yearsInMsec = 1000 * 60 * 60 * 24 * 365;
    let years = Math.floor(today / yearsInMsec);

    d.querySelector(countdownArea).innerHTML = `<h3>${years}</h3>`; */

}