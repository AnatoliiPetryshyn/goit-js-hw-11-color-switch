const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', handleStartBtnClick);

refs.stopBtn.addEventListener('click', handleStopBtnClick);

let intervalId;

function handleStartBtnClick(e) {
  intervalId = setInterval(switchColor, 1000, colors);
  refs.startBtn.disabled = true;
}

function switchColor(colors) {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log('intrval');
}

function handleStopBtnClick(e) {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
