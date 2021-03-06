import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

function onSubmit(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);
  let position = 1;

  for (position; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay }); // Fulfill
    } else {
      reject({ position, delay }); // Reject
    }
  });
}
refs.form.addEventListener('submit', onSubmit);
