$(document).ready(function () {
    $('.slicker').slick({
        autoplay: true,
        speed: 100,
        infinite: true,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear',
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
                document.getElementById("theLoveDiv").style.visibility = "visible";
                // document.getElementById("loveButton").setAttribute("disabled", "disabled");
                document.getElementById("buttonDiv").style.visibility = "hidden";
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


// YouTube