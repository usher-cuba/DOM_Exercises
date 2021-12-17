const d = document;
const n = navigator;
const $ua = n.userAgent;

export default function userDeviceInfo(id){
    const $divUserDeviceID = d.getElementById(id);
    const isMobile = {
        android: () => $ua.match(/android/i),
        ios: () => $ua.match(/iphone|ipad|ipod/i),
        windows: () => $ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        },
    };
    const isDesktop = {
        linux: () => $ua.match(/linux/i),
        mac: () => $ua.match(/mac/i),
        windows: () => $ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
        chrome: () => $ua.match(/chrome/i),
        safari: () => $ua.match(/safari/i),
        firefox: () => $ua.match(/firefox/i),
        opera: () => $ua.match(/opera|opera mini/i),
        ie: () => $ua.match(/msie|iemobile/i),
        edge: () => $ua.match(/edge/i),
        any: function(){
            return this.chrome() || this.safari() || this.firefox() ||
            this.opera() || this.ie() || this.edge();
        }
    };

    $divUserDeviceID.innerHTML = `
        <ul>
            <li>User Agent: <b>${$ua}</b></li>
            <li>Platform: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navigator: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    //Exclusive Content
    if(isBrowser.chrome()){
        $divUserDeviceID.innerHTML += `
            <p><mark>This content is just for Chrome</mark></p>
        `;
    }

    if(isBrowser.firefox()){
        $divUserDeviceID.innerHTML += `
           <p><mark>This content is just for Firefox</mark></p>
        `;
    }

    if(isDesktop.linux()){
        $divUserDeviceID.innerHTML += `
           <p><mark>Download this software to Linux OS</mark></p>
        `;
    }

    if(isDesktop.mac()){
        $divUserDeviceID.innerHTML += `
           <p><mark>Download this software to Mac OS</mark></p>
        `;
    }

    if(isDesktop.windows()){
        $divUserDeviceID.innerHTML += `
           <p><mark>Download this software to Windows OS</mark></p>
        `;
    }

    //Redirecting
    // if(isMobile.android()){
    //     window.location.href = "http://www.cubadebate.cu/";
    // }
} 