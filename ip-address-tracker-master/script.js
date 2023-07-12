const ipAddressOutput = document.getElementById("ipAddressOut");
const locationOut = document.getElementById("locationOut");
const timezoneOut = document.getElementById("timezoneOut");
const ispOut = document.getElementById("ispOut");

const inputId = document.getElementById("inputId");
const button = document.getElementById("searchButton");
const mapDiv = document.getElementById("map");

const markerIcon = L.icon({
    iconUrl: `/images/icon-location.svg`,
    iconAnchor: [22, -20],
}) 

const getIp = async (ip) => {
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

    const map = L.map('map', {
        center: [data.lat, data.lon],
        zoom: 17,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    }).addTo(map);
    const marker = L.marker(map.getCenter(), {icon: markerIcon}).addTo(map);
    marker.setLatLng(map.getCenter());
    map.zoomControl = false;
}

button.addEventListener("click", e => {
    e.preventDefault();
    getIp(inputId.value);
});