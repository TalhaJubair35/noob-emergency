let heartButtons = document.getElementsByClassName('heart-button');

for (const button of heartButtons) {
    button.addEventListener("click", function () {
        let heartNumber = document.getElementById('heart-number');
        heartNumber.innerText = parseInt(heartNumber.innerText) + 1;
    });
}

let callButtons = document.getElementsByClassName('call-button');
let numbers = document.getElementsByClassName('number');
//////////////////////////////////
let coin = document.getElementById('coin');
let copy = document.getElementById('copy');

// ///////////////////////////

let nationalEmergencyTitle = document.getElementById('national-emergency-title');
let nationalEmergencyNumber = document.getElementById('national-emergency-number');
let nationalEmergencyCopyButton = document.getElementById('national-emergency-copy-button');
let nationalEmergencyCallButton = document.getElementById('national-emergency-call-button');

////////////////////////////////////

let policeTitle = document.getElementById('police-title');
let policeNumber = document.getElementById('police-number');
let policeCopyButton = document.getElementById('police-copy-button');
let policeCallButton = document.getElementById('police-call-button');

///////////////////////////////

let fireServiceTitle = document.getElementById('fire-service-title');
let fireServiceNumber = document.getElementById('fire-service-number');
let fireServiceCopyButton = document.getElementById('fire-service-copy-button');
let fireServiceCallButton = document.getElementById('fire-service-call-button');

///////////////////

let ambulanceServiceTitle = document.getElementById('ambulance-service-title');
let ambulanceServiceNumber = document.getElementById('ambulance-service-number');
let ambulanceServicecopyButton = document.getElementById('ambulance-service-copy-button');
let ambulanceServiceCallButton = document.getElementById('ambulance-service-call-button');

//////////////////////

let womenChildHelplineTitle = document.getElementById('women-child-helpline-title');
let womenChildHelplineNumber = document.getElementById('women-child-helpline-number');
let womenChildHelplineCopyButton = document.getElementById('women-child-helpline-copy-button');
let womenChildHelplineCallButton = document.getElementById('women-child-helpline-call-button');

////////////

let antiCorruptionHelplineTitle = document.getElementById('anti-corruption-helpline-title');
let antiCorruptionHelplineNumber = document.getElementById('anti-corruption-helpline-number');
let antiCorruptionHelplineCopyButton = document.getElementById('anti-corruption-helpline-copy-button');
let antiCorruptionHelplineCallButton = document.getElementById('anti-corruption-helpline-call-button');

///////////

let electricityHelplineTitle = document.getElementById('electricity-helpline-title');
let electricityHelplineNumber = document.getElementById('electricity-helpline-number');
let electricityHelplineCopyButton = document.getElementById('electricity-helpline-copy-button');
let electricityHelplineCallButton = document.getElementById('electricity-helpline-call-button');

///////////

let bracHelplineTitle = document.getElementById('brac-helpline-title');
let bracHelplineNumber = document.getElementById('brac-helpline-number');
let bracHelplineCopyButton = document.getElementById('brac-helpline-copy-button');
let bracHelplineCallButton = document.getElementById('brac-helpline-call-button');

////////////

let bangladeshRailwayHelplineTite = document.getElementById('bangladesh-railway-helpline-tite');
let bangladeshRailwayHelplineNumber = document.getElementById('bangladesh-railway-helpline-number');
let bangladeshRailwayHelplineCopyButton = document.getElementById('bangladesh-railway-helpline-copy-button');
let bangladeshRailwayHelplineCallButton = document.getElementById('bangladesh-railway-helpline-call-button');

////////////

let callHistory = document.getElementById('call-history');

/////


let coinValue = parseInt(coin.innerText);
let copyValue = parseInt(copy.innerText);

///////

function addToHistory(title, number) {
    let now = new Date();
    let time = now.toLocaleTimeString(); 

    let historyList = document.getElementById('history-list');

    let entry = document.createElement('div');
    entry.className = "flex items-center justify-between p-3 bg-gray-100 border border-gray-200 rounded-lg shadow";

    entry.innerHTML = `
        <div>
            <p class="font-semibold text-[#111]">${title}</p>
            <p class="text-gray-600 text-sm">${number}</p>
        </div>
        <div class="text-gray-500 text-sm">${time}</div>
    `;

    historyList.append(entry); // latest call on top
}


//////

document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-list").innerHTML = "";
});


////

nationalEmergencyCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + nationalEmergencyTitle.innerText + " " + nationalEmergencyNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(nationalEmergencyTitle.innerText, nationalEmergencyNumber.innerText);

    }
})

////////////


policeCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + policeTitle.innerText + " " + policeNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
        addToHistory(policeTitle.innerText, policeNumber.innerText);
    }
})

/////

fireServiceCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + fireServiceTitle.innerText + " " + fireServiceNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(fireServiceTitle.innerText, fireServiceNumber.innerText);
    }
})

/////

ambulanceServiceCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + ambulanceServiceTitle.innerText + " " + ambulanceServiceNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(ambulanceServiceTitle.innerText, ambulanceServiceNumber.innerText);
    }
})

/////

womenChildHelplineCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + womenChildHelplineTitle.innerText + " " + womenChildHelplineNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(womenChildHelplineTitle.innerText, womenChildHelplineNumber.innerText);
    }
})
//////

antiCorruptionHelplineCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + antiCorruptionHelplineTitle.innerText + " " + antiCorruptionHelplineNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(antiCorruptionHelplineTitle.innerText, antiCorruptionHelplineNumber.innerText);
    }
})

/////

electricityHelplineCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + electricityHelplineTitle.innerText + " " + electricityHelplineNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(electricityHelplineTitle.innerText, electricityHelplineNumber.innerText);
    }
})

/////

bracHelplineCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + bracHelplineTitle.innerText + " " + bracHelplineNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
         addToHistory(bracHelplineTitle.innerText, bracHelplineNumber.innerText);
    }
})
///////
bangladeshRailwayHelplineCallButton.addEventListener("click", function () {


    if (coinValue < 20) {
        alert("you dont have suficient balance");
        return;
    }
    else {
        alert("calling " + bangladeshRailwayHelplineTite.innerText + " " + bangladeshRailwayHelplineNumber.innerText + "...")
        coinValue -= 20;
        coin.innerText = coinValue;
        addToHistory(bangladeshRailwayHelplineTite.innerText, bangladeshRailwayHelplineNumber.innerText);
    }
})

//////////////
// let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     console.log(hours+":"+minutes+":"+seconds);

nationalEmergencyCopyButton.addEventListener("click", function () {

    let number = nationalEmergencyNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${nationalEmergencyTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;

})
/////////
policeCopyButton.addEventListener("click", function () {

    let number = policeNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${policeTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;


})
/////
fireServiceCopyButton.addEventListener("click", function () {

    let number = fireServiceNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${fireServiceTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;


})
///

ambulanceServicecopyButton.addEventListener("click", function () {

    let number = ambulanceServiceNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${ambulanceServiceTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})
/////

womenChildHelplineCopyButton.addEventListener("click", function () {

    let number = womenChildHelplineNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${womenChildHelplineTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})
////

antiCorruptionHelplineCopyButton.addEventListener("click", function () {

    let number = antiCorruptionHelplineNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${antiCorruptionHelplineTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})

/////

electricityHelplineCopyButton.addEventListener("click", function () {

    let number = electricityHelplineNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${electricityHelplineTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})

/////

bracHelplineCopyButton.addEventListener("click", function () {

    let number = bracHelplineNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${bracHelplineTitle.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})

////

bangladeshRailwayHelplineCopyButton.addEventListener("click", function () {

    let number = bangladeshRailwayHelplineNumber.innerText;
    navigator.clipboard.writeText(number)
    alert(`${bangladeshRailwayHelplineTite.innerText}: ${number} copied!`);
    copyValue += 1;
    copy.innerText=copyValue;
})

