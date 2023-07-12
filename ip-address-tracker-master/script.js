const ipAddressOutput = document.getElementById("ipAddressOut");
const locationOut = document.getElementById("locationOut");
const timezoneOut = document.getElementById("timezoneOut");
const ispOut = document.getElementById("ispOut");
const errorMessage = document.getElementsByClassName(`error-message`)[0];

const inputId = document.getElementById("inputId");
const button = document.getElementById("searchButton");
const mapDiv = document.getElementById("map");
let prevMap = false;
let map;

const markerIcon = L.icon({
    iconUrl: `/images/icon-location.svg`,
    iconAnchor: [22, -20],
}) 

const getIp = async (ip) => {
    if (prevMap) map.remove();

    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    const ipAddress = data.query;
    const location = data.regionName;
    const timezone = data.timezone;
    const isp = data.isp;

    const timezoneString = ct.getTimezone(timezone).dstOffsetStr;
    
    ipAddressOutput.innerText = ipAddress;
    locationOut.innerText = location;
    timezoneOut.innerText = `UTC ${timezoneString}`;
    ispOut.innerText = isp;

    map = L.map('map', {
        center: [data.lat, data.lon],
        zoom: 17,
        zoomControl: false,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    }).addTo(map);
    const marker = L.marker(map.getCenter(), {icon: markerIcon}).addTo(map);
    marker.setLatLng(map.getCenter());
    prevMap = true;
}

button.addEventListener("click", e => { 
    e.preventDefault();

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputId.value)) {  
        errorMessage.style.display = "none";
        inputId.classList.remove("error-border");
        getIp(inputId.value);
    }  else {
        errorMessage.style.display = "block";
        inputId.classList.add("error-border");
    }
});