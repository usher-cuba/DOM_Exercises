const d = document;
const n = navigator;

export default function getGeolocation(id){
    const $divGeolocation = d.getElementById(id);

    let options = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout : 10000
    };

    const success = ((position) => {
        let coords = position.coords;
        console.log(position);

        $divGeolocation.innerHTML = `
            <p>Current position:</p>
            <ul>
                <li>Latitude:<b>${coords.latitude}</b></li>
                <li>Longitude:<b>${coords.longitude}</b></li>
                <li>Accuracy:<b>${coords.accuracy}</b></li>
            </ul>
            <a href="http://www.google.com/map/@${coords.latitude},${coords.longitude},1z"
            target="_blank" rel="noopener">See it in Google Maps</a>
        `;
    });
    
    const err = ((err) => {
        $divGeolocation.innerHTML = `
        <p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(err)
    });

    n.geolocation.getCurrentPosition(success, err, options);
}