import { DateTime } from "/luxon";

const ipAddressOutput = document.getElementById("ipAddressOut");
const locationOut = document.getElementById("locationOut");
const timezoneOut = document.getElementById("timezoneOut");
const ispOut = document.getElementById("ispOut");


const getIp = async (ip) => {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    const ipAddress = data.query;
    const location = data.regionName;
    const timezone = data.timezone;
    const isp = data.isp;


}

var overrideZone = DateTime.fromISO("2017-05-15T09:10:23", { zone: "Europe/Paris" });
console.log(overrideZone);


getIp("192.212.174.101");