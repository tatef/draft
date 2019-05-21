function timer() {
  let deadline = '2018-10-21';
  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    return {
      'totul': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(upDateClock, 1000);

    function upDateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);
      if (t.totul <= 0) {
        clearInterval(timeInterval);
      }
      if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }

      function addZero(endtime) {
        if (endtime >= 0 && endtime < 10) {
          return '0' + endtime;
        } else {
          return endtime;
        }
      }
    }
  }
  setClock('timer', deadline);
}
module.exports = timer;
