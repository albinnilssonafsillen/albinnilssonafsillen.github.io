$(document).ready(function() {
    $('.slicker').slick({
        autoplay: true,
        speed: 200,
        infinite: true,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear'
    });
});

function justSayYes() {

    const response = confirm("Vänligen bekräfta om du vill ingå i partnerskap?");

    if(response) {
        alert(`Nice`)
        document.getElementById("theLoveDiv").style.visibility = "visible";
    }
}