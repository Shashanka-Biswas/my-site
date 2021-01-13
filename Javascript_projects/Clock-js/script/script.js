// Designed by : Shashanka Biswas
// Algorithm writer : Shashanka Biswas
// Coded by : Shashanka Biswas
// All right reserved to Shashanka Biswas

// selecting time display divs
const seccondsDiv = document.querySelector('.secconds');
const minuiesDiv = document.querySelector('.minuies');
const houresDiv = document.querySelector('.houres');
const ampnDiv = document.querySelector('.ampm');

// Alarm setting
let alarmOn = false;
const alarmSound = document.querySelector('#alarm-sound');
const alarmDiv = document.querySelector('.alarm-input'); //alarm setting div

//Alarm sections selecting
const setAlarm = document.querySelector('.alarm-notifier');
const stopAlarm = document.querySelector('.stop-alarm');
const notification = document.querySelector('.alarm-notification');
const okButton = document.querySelector('.ok-button');

//alarm inputs div
const houreInput = document.querySelector('#houres');
const minuiteInput = document.querySelector('#minuies');
const seccondInput = document.querySelector('#secconds');
const ampmInput = document.querySelector('#ampm');

// alarm data variable
let alarmHoures;
let alarmMinuites;
let alarmSecconds;
let alarmAmpn;

//displaying alarm input section
setAlarm.addEventListener('click', () => {
    if (alarmDiv.style.display == "none") {
        return alarmDiv.style.display = "block";
    } else {
        return alarmDiv.style.display = "none";
    }
});

//seting alarm
okButton.addEventListener('click', () => {
    alarmHoures = parseInt(houreInput.value);
    alarmMinuites = minuiteInput.value;
    alarmSecconds = seccondInput.value;
    alarmAmpm = ampmInput.value;
    if (alarmHoures > 12 || alarmMinuites >= 60 || alarmSecconds >= 60) {
        alert("Please Enter a valid value");
        console.log(typeof (alarmAmpn));
        console.log(typeof (alarmHoures));
        console.log(typeof (alarmMinuites));
        console.log(typeof (alarmSecconds));
    } else {
        notification.innerText = `${alarmHoures}:${alarmMinuites}:${alarmSecconds}`;
        alarmDiv.style.display = "none";
    }
})

// Stoping Alarm
stopAlarm.addEventListener('click', () => {
    alarmOn = false;
    notification.innerText = '';
    // setInterval(() => {
    //     notification.innerText= ": :";
    // }, 500);
    stopAlarm.style.display = "none";
})

// changing the values afer 1 seccond
setInterval(timeD, 1000);

function timeD() {

    const now = new Date;
    let nowSecconds = now.getSeconds();
    let nowMinuites = now.getMinutes();
    let nowHoures = now.getHours();
    let ampm = nowHoures > 12 ? "PM" : "AM"; //setting PM if the time is more than 12 houre
    nowHoures = nowHoures == nowHoures % 12 ? nowHoures : nowHoures % 12; //converting the 24 system to 12 system
    nowHoures = nowHoures == 0 ? 12 : nowHoures; //setting 0'o clock to 12'o clock

    // showing time to the display
    seccondsDiv.innerText = nowSecconds;
    minuiesDiv.innerText = nowMinuites;
    houresDiv.innerText = nowHoures;
    ampnDiv.innerText = ampm;

    //checking alarm and playing sound
    if (nowSecconds == alarmSecconds && nowMinuites == alarmMinuites && nowHoures == alarmHoures && ampm == alarmAmpm) {
        console.log("alarm");
        alarmOn = true;
    }
    if (alarmOn) {
        alarmSound.play();
        stopAlarm.style.display = "block";
    }
}

