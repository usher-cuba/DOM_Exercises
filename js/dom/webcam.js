const d = document;
const n = navigator;

export default function webCam(webcam){
    const $video = d.getElementById(webcam);

   if(n.mediaDevices.getUserMedia){
       n.mediaDevices.getUserMedia({video:true, audio:false})
       .then((stream) => {
           $video.srcObject = stream;
           $video.play();
       })
       .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`)
        console.log(`That has ocurred: ${err}`);
       })
    }

}