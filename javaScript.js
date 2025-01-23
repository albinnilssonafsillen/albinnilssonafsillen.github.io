$(document).ready(function () {
    $('.slicker').slick({
        autoplay: true,
        speed: 100,
        infinite: true,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear',
        variableWidth: false,
    });
});

function justSayYes() {
    const response = confirm("Vänligen bekräfta om du vill ingå i partnerskap?");
    if (response) {
        const response1 = confirm("Vill du verkligen detta?");
        if (response1) {
            const response2 = confirm("Helt säkert?");
            if (response2) {
                alert(`Nice`)
                document.getElementById("theLoveDiv").classList.add("show"); 
                document.getElementById("buttonDiv").style.display = "none";
                document.getElementById("loveText").innerHTML ="Vänligen hångla med systemadministratören";
                document.getElementById("loveText").style.border ="4px solid whitesmoke";
                document.getElementById("loveText").style.padding ="5px";
            } else {
                alert(":(")
                return;
            }
        } else {
            alert(":(")
            return;
        }
    } else {
        alert(":(")
        return;
    }

}


const sinceIDo = new Date(1737552644 * 1000);
let elapsedMilliseconds = Date.now() - sinceIDo.getTime();

function updateMarriedTime() {

    const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);
    const years = Math.floor(totalDays / 365);
    const remainingDays = totalDays % 365;
    const months = Math.floor(remainingDays / 30);
    const daysLeft = remainingDays % 30;

    document.getElementById("years").innerHTML = years  + " år";
    document.getElementById("months").innerHTML = months + " månader";
    document.getElementById("days").innerHTML = daysLeft + " dagar";
    document.getElementById("hours").innerHTML = hours + " timmar";
    document.getElementById("minutes").innerHTML = minutes + " minuter";
    document.getElementById("seconds").innerHTML = seconds + " sekunder";
}

function startTicker() {
    updateMarriedTime(); 
    setInterval(updateMarriedTime, 10);
}

document.addEventListener("DOMContentLoaded", startTicker);