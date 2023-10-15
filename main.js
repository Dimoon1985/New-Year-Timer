const day = document.getElementById("day");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function countDownTimer() {
  const todayDate = Date.now();

  const result = newYear - todayDate;

  const resDay = Math.floor(result / 1000 / 60 / 60 / 24);
  const resHrs = Math.floor((result / 1000 / 60 / 60) % 24);
  const resMin = Math.floor((result / 1000 / 60) % 60);
  const resSec = Math.floor((result / 1000) % 60);

  day.innerHTML = resDay < 10 ? "0" + resDay : resDay;
  hrs.innerHTML = resHrs < 10 ? "0" + resHrs : resHrs;
  min.innerHTML = resMin < 10 ? "0" + resMin : resMin;
  sec.innerHTML = resSec < 10 ? "0" + resSec : resSec;
}
setInterval(countDownTimer, 1000);
countDownTimer();
