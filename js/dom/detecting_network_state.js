const d = document;
const w = window;
const n = navigator;

export default function networkDeviceInfo(){
    const isOnLine = () =>{
        const $div = d.createElement("div");

        if(n.onLine){
            $div.textContent = "Connection Established";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }
        else{
            $div.textContent = "Connection Lost";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        
        setTimeout(() => {
            d.body.removeChild($div);    
        }, 3000);
    }   

    w.addEventListener("online", (e)=> isOnLine());
    w.addEventListener("offline", (e)=> isOnLine());
}