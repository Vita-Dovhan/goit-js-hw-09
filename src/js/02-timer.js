
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
}
let difference;
let userDate = null;

const options = {
  enableDate: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0];
    if (userDate <= Date.now()) {
      window.alert('Please choose a date in the future')
      return
    }
    refs.btnStart.disabled = false;
  },
};
flatpickr("input[type='text']", options);


function countDown() {
  const count = setInterval(() => {
    const currentTime = Date.now();
    difference = userDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(difference);
    refs.spanDays.textContent = pad(days);
    refs.spanHours.textContent = pad(hours);
    refs.spanMinutes.textContent = pad(minutes);
    refs.spanSeconds.textContent = pad(seconds);
    if (difference < 1000) {
      clearInterval(count);
    }
  }, 1000);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', () => {
  countDown();
  refs.btnStart.disabled = true;
});

















































