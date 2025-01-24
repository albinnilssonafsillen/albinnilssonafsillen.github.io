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

const sinceIDo = new Date(547714658 * 1000);

function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(
    '.segment-display'
  );
  const segmentDisplayTop = segmentDisplay.querySelector(
    '.segment-display__top'
  );
  const segmentDisplayBottom = segmentDisplay.querySelector(
    '.segment-display__bottom'
  );

  const segmentOverlay = segmentDisplay.querySelector(
    '.segment-overlay'
  );
  const segmentOverlayTop = segmentOverlay.querySelector(
    '.segment-overlay__top'
  );
  const segmentOverlayBottom = segmentOverlay.querySelector(
    '.segment-overlay__bottom'
  );

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(
  displayElement,
  overlayElement,
  value
) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements =
    getTimeSegmentElements(segmentElement);

  if (
    parseInt(
      segmentElements.segmentDisplayTop.textContent,
      10
    ) === timeValue
  ) {
    return;
  }

  segmentElements.segmentOverlay.classList.add('flip');

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue
  );

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove('flip');
    updateSegmentValues(
      segmentElements.segmentDisplayBottom,
      segmentElements.segmentOverlayTop,
      timeValue
    );

    this.removeEventListener(
      'animationend',
      finishAnimation
    );
  }

  segmentElements.segmentOverlay.addEventListener(
    'animationend',
    finishAnimation
  );
}

function updateTimeSection(sectionID, timeValue) {
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments =
    sectionElement.querySelectorAll('.time-segment');

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}


function getTimeElapsed(startDateTime) {
    const nowTime = Date.now();
    const complete = nowTime < startDateTime;
  
    if (complete) {
      return {
        complete,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0,
        years: 0
      };
    }
  
    const start = new Date(startDateTime);
    const now = new Date(nowTime);
  
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();
  
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
  
    return {
      complete,
      seconds,
      minutes,
      hours,
      days,
      months,
      years
    };
  }
  

function getTimeRemaining(targetDateTime) {
  const nowTime = Date.now();
  const complete = nowTime < targetDateTime;

  if (complete) {
    return {
      complete,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      months: 0,
      years: 0
    };
  }

  let secondsElapsed = Math.floor((nowTime - sinceIDo) / 1000);

  const years = Math.floor(secondsElapsed / (365 * 24 * 60 * 60));
  secondsElapsed -= years * 365 * 24 * 60 * 60;

  const months = Math.floor(secondsElapsed / (30 * 24 * 60 * 60));
  secondsElapsed -= months * 30 * 24 * 60 * 60;

  const days = Math.floor(secondsElapsed / (24 * 60 * 60));
  secondsElapsed -= days * 24 * 60 * 60;

  const hours = Math.floor(secondsElapsed / (60 * 60));
  secondsElapsed -= hours * 60 * 60;

  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  return {
    complete,
    seconds,
    minutes,
    hours,
    days,
    months,
    years
  };
}

function updateAllSegments() {
  const timeRemainingBits = getTimeElapsed(
    new Date(sinceIDo).getTime()
  );

  updateTimeSection('seconds', timeRemainingBits.seconds);
  updateTimeSection('minutes', timeRemainingBits.minutes);
  updateTimeSection('hours', timeRemainingBits.hours);
  updateTimeSection('days', timeRemainingBits.days);
  updateTimeSection('months', timeRemainingBits.months);
  updateTimeSection('years', timeRemainingBits.years);

  return timeRemainingBits.complete;
}

const countdownTimer = setInterval(() => {
  const isComplete = updateAllSegments();

  if (isComplete) {
    clearInterval(countdownTimer);
  }
}, 1000);

updateAllSegments();
