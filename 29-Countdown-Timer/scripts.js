let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  // console.log(now, then);
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if (secondsLeft <= 0) {
      clearInterval(countdown);
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  console.log({ minutes, remainderSeconds });
}
