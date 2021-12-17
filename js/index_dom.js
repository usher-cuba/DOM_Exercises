import hamburguerMenu from "./dom/menu_hamburguer.js";
import {digitalWatch, alarmWatch} from "./dom/digital_watch_alarm.js";
import {moveBall, shorcuts} from "./dom/keyboard.js";
import{countdown} from "./dom/countdown.js";
import scrollTopBtn from "./dom/scroll_top_btn.js";
import darkLight from "./dom/dark_light.js";
import responsiveMedia from "./dom/responsive.js";
import responsiveTester from "./dom/tester_responsive.js";
import userDeviceInfo from "./dom/detecting_device_user_agent.js";
import networkDeviceInfo from "./dom/detecting_network_state.js";
import webCam from "./dom/webcam.js";
import getGeolocation from "./dom/geolocation.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn",".panel", ".menu a");
    digitalWatch("#digitalWatch", "#btnStartWatch", "#btnStopWatch");
    alarmWatch("assets/alarms/3.mp3","#btnStartAlarm", "#btnStopAlarm");
    countdown(
     "countdownArea",
     "January 28, 2022 20:00:00",
     "Happy Birthday Nelson Alejandro",
     "assets/songs/51-Tony-Angeles-Today-Is-Your-Birthday.mp3"
     );
     scrollTopBtn(".scrollTopBtn");
     responsiveMedia("youtube","(min-width:1024px)",
     `<a href="https://youtu.be/xdUjEOw-kYA" 
        target="_blank" rel="noopener">Watch Video</a>`,     
     `<iframe width="560" height="315" 
     src="https://www.youtube.com/embed/xdUjEOw-kYA" 
     title="YouTube video player" frameborder="0" allow="accelerometer; 
     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>`);
     
     responsiveMedia("gmaps","(min-width:1024px)",
     `<a href="https://goo.gl/maps/mNxX7n7za24SZJ3W8" 
        target="_blank" rel="noopener">Watch Map</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154786.3607748148!2d36.264464442095125!3d55.57691161183884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2zTW9zY8O6LCBSdXNpYQ!5e0!3m2!1ses!2sch!4v1638924984133!5m2!1ses!2sch" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
     
     responsiveTester("responsive-tester");
     userDeviceInfo("user-device");
     webCam("webcam");
     getGeolocation("geolocation");
});

d.addEventListener("keydown", (e) => {
    shorcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkLight(".darkLightBtn","dark-mode");
networkDeviceInfo();