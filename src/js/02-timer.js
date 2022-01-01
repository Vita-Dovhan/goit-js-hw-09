
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]')

const options = {
  enableDate: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userDate = selectedDates[0];
    if (userDate <= Date.now()) {
      window.alert('Please choose a date in the future')
      return
    }
    setInterval(() => {
      const countDown = userDate - Date.now()
      console.log(countDown / 3600000)
    }, 1000)


  },
};


flatpickr("input[type='text']", options);
// const countDown = {
//   start() {
//     setInterval(() => {
//       const currentTime = Date.now();

//       const userDate = options.selectedDates[0];

//       const difference = (userDate - currentTime);
//       console.log(difference);
//     }, 1000)
//   }
// }
// countDown.start()






















