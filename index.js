const timerdisplayelem = document.getElementById("timerdisplay");
const startbtnelem = document.getElementById("startbtn");
const stopbtnelem = document.getElementById("stopbtn");
const resetbtnelem = document.getElementById("resetbtn");

let msecs = 0;
let secs = 0;
let mints = 0;

let timerid = null;

startbtnelem.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(starttimer, 10);
});

stopbtnelem.addEventListener('click', function () {
    clearInterval(timerid);
});

resetbtnelem.addEventListener('click', function(){
    clearInterval(timerid);
    timerdisplayelem.innerHTML = `00 : 00 : 00`;
    msecs = secs = mints = 0;

})

function starttimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mints++;
    }
  }

  let msecsstring = msecs < 10 ? `0${msecs}` : msecs;
  let secsstring = secs < 10 ? `0${secs}` : secs;
  let mintsstring = mints < 10 ? `0${mints}` : mints;
  timerdisplayelem.innerHTML = `${mintsstring} : ${secsstring} : ${msecsstring}`;
}

