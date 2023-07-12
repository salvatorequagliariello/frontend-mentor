const ipAddressOutput = document.getElementById("ipAddressOut");
const locationOut = document.getElementById("locationOut");
const timezoneOut = document.getElementById("timezoneOut");
const ispOut = document.getElementById("ispOut");

const inputId = document.getElementById("inputId");
const button = document.getElementById("searchButton");

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
}

button.addEventListener("click", e => {
    e.preventDefault();
    getIp(inputId.value);
});

// 192.212.174.101