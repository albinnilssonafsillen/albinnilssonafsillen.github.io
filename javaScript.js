$(document).ready(function () {
    $('.slicker').slick({
        autoplay: true,
        speed: 200,
        infinite: true,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear',
        centerMode: true,
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