// alarm clock / timer which will beep after a specified amount of time has passed

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter alarm seconds.", numbers => {

  let timer = 0;
  let timerSum = 0;

  let arr = numbers.split(' ');
  if (arr.length === 0) {
    rl.close();
  }

  arr = arr.filter(word => word.length !== 0);
  for (let str of arr) {

    if (!isNaN(str)) {

      timer = Number(str) * 1000;

      if (timer >= 0) {
        timerSum += timer;
        setTimeout(() => {
          process.stdout.write('\x07');
        }, timerSum);
      }

    }
  }
  rl.close();
});
