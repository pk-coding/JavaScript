const state = {
  randomWidth: 150,
  randomHeight: 200,
  calculateAreaValue: 150 * 200,
};
const cloneState = {
  ...state,
};

const number_of_draws = (cloneState) => {
  sessionStorage.setItem('number', sessionStorage.getItem('number') + 1);
  sessionStorage.getItem('number') === '11111' ? (equaol_sides_of_rectangle(cloneState), sessionStorage.removeItem('number')) : draw_New_Size(cloneState);
};

const equaol_sides_of_rectangle = (cloneState) => {
  cloneState.randomWidth = Math.floor(Math.random() * (500 - 100) + 100);
  cloneState.randomHeight = cloneState.randomWidth;
  calculate_area(cloneState);
  change_shape_rectangle(cloneState);
};

const change_shape_rectangle = (cloneState) => {
  let rectangle = document.querySelector('#rectangle');
  cloneState.randomWidth === cloneState.randomHeight ? ((rectangle.style.backgroundColor = 'orange'), (rectangle.style.borderRadius = '50%')) : ((rectangle.style.backgroundColor = 'rgb(101, 244, 115)'), (rectangle.style.borderRadius = '0%'));
};

const draw_New_Size = (cloneState) => {
  cloneState.randomWidth = Math.floor(Math.random() * (500 - 100) + 100);
  cloneState.randomHeight = Math.floor(Math.random() * (500 - 100) + 100);
  change_shape_rectangle(cloneState);
  calculate_area(cloneState);
};

const change_state = (cloneState) => {
  document.getElementById('rectangle').style.width = cloneState.randomWidth + 'px';
  document.getElementById('rectangle').style.height = cloneState.randomHeight + 'px';
}

const calculate_area = (cloneState) => {
  cloneState.calculateAreaValue = cloneState.randomWidth * cloneState.randomHeight;
  show_width_Height_value(cloneState);
};


const show_width_Height_value = (cloneState) => {
  let showWidtHeightValue = document.getElementById('showWidtHeightValue');
  return (showWidtHeightValue.innerHTML = '<p>' + '<strong>' + 'Szerokość wynosi: ' + '</strong>' + '</p>' + cloneState.randomWidth + '<br />' + '<p>' + '<strong>' + 'Wysokość wynosi: ' + '</strong>' + '</p>' + cloneState.randomHeight + '<br />' + '<p>' + '<strong>' + 'Pole figury jest równe: ' + '</strong>' + '</p>' + cloneState.calculateAreaValue);
};

function hex_Color(documentQuerySelectorIDWrapper) {
  const colorHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  documentQuerySelectorIDWrapper.setAttribute('style', `background-color: ${colorHex}; border: 1px solid`);
}

document.getElementById('inputDraw').addEventListener('click', () => number_of_draws(cloneState));
document.getElementById('inputDraw').addEventListener('click', () => change_state(cloneState));
document.getElementById('inputDraw').addEventListener('click', () => hex_Color(document.querySelector('#wrapper')));


// // ---------------------------------------------------------------------------------------------------------------


const data = {
  ball: document.querySelector('#ball'),
  boxForBall: document.querySelector('#boxForBall'),
  randomWidth: 0,
  randomHeight: 0,
  sum: 0,
  number: 1,
  interval: 0,
  reverse: false,
  ballColor: '#93EA3B',
  nextBallColor: '',
};

const cloneData = {
  ...data,
};

const change_color = async (cloneData) => {
  try {
    if (cloneData.ballColor === cloneData.nextBallColor || cloneData.nextBallColor === '') {
      cloneData.nextBallColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  } catch {
    console.log(new Error('Wystąpił problem'));
  }
  console.log(cloneData.nextBallColor);
};

const set_position_ball = (cloneData) => {
  cloneData.ball.style.top = cloneData.randomHeight + 'px';
  if (cloneData.reverse === false) {
    cloneData.ball.style.left = cloneData.sum + 'px';
  } else if (cloneData.reverse === true) {
    cloneData.ball.style.left = parseInt(cloneData.ball.style.left) - cloneData.randomWidth + 'px';
  }
};

const reverse_ball = (cloneData) => {
  cloneData.ballColor = cloneData.nextBallColor;
  cloneData.ball.style.backgroundColor = cloneData.ballColor;
  if (cloneData.reverse === false) {
    cloneData.ball.style.left = cloneData.boxForBall.clientWidth - 20 + 'px';
    cloneData.reverse = true;
    cloneData.sum = 0;
  } else if (cloneData.reverse === true) {
    cloneData.ball.style.left = cloneData.boxForBall.clientWidth - 500 + 'px';
    cloneData.reverse = false;
    cloneData.sum = 0;
  }
};

const draw_position_of_ball = async (cloneData) => {
  await change_color(cloneData);
  cloneData.randomHeight = Math.floor(Math.random() * (cloneData.boxForBall.clientHeight - 20 - 0) + 0);
  cloneData.randomWidth = Math.floor(Math.random() * ((cloneData.boxForBall.clientWidth - 20) / 4 - 0) + 0);
  cloneData.sum += cloneData.randomWidth;
  if (cloneData.sum < 500) {
    set_position_ball(cloneData);
  } else if (cloneData.sum > 500) {
    cloneData.sum = 500;
    reverse_ball(cloneData);
  }
};

const start_stop = (cloneData) => {
  cloneData.number += 1;
  cloneData.number % 2 === 0
    ? (cloneData.interval = setInterval(function () {
      draw_position_of_ball(cloneData);
    }, 1500))
    : clearInterval(cloneData.interval);
};

const reset_animation = () => {
  window.location.reload();
};

document.querySelector('#reset').addEventListener('click', reset_animation);
document.querySelector('#switchOnOff').addEventListener('click', () => start_stop(cloneData));


// // ---------------------------------------------------------------------------------------------------------------


const pointInBox = document.querySelector('#pointInBox');
const box = document.querySelector('#box');
const point = document.querySelector('#point');
const losuj = document.querySelector('#losuj');


const changePositionBox = () => {
  box.style.left = Math.floor(Math.random() * (pointInBox.clientWidth - box.clientWidth - 0) + 0) + "px";
  box.style.top = Math.floor(Math.random() * (pointInBox.clientHeight - box.clientHeight - 0) + 0) + "px";
}
losuj.addEventListener('click', changePositionBox);

const changePositionPoint = () => {
  point.style.left = Math.floor(Math.random() * (pointInBox.clientWidth - point.clientWidth - 0) + 0) + "px";
  point.style.top = Math.floor(Math.random() * (pointInBox.clientHeight - point.clientHeight - 0) + 0) + "px";
}
losuj.addEventListener('click', changePositionPoint);

const checkedPosition = () => {
  let positionPoint1 = point.offsetLeft + (point.clientWidth / 2);
  let positionPoint2 = point.offsetTop + (point.clientHeight / 2);
  let positionBox1 = box.offsetLeft;
  let positionBox2 = box.offsetLeft + box.clientWidth;
  let positionBox3 = box.offsetTop;
  let positionBox4 = box.offsetTop + box.clientHeight;

  if (positionPoint1 > positionBox1
    && positionPoint1 < positionBox2
    && positionPoint2 > positionBox3
    && positionPoint2 < positionBox4) {
    point.style.width = 200 + 'px';
    point.style.height = 200 + 'px';
    point.style.backgroundColor = 'yellow';
    point.innerText = "Hura, jestem w środku :-)"
  } else {
    point.style.width = 70 + 'px';
    point.style.height = 70 + 'px';
    point.style.backgroundColor = '#93EA3B';
    point.innerText = '';
  }
}
point.addEventListener('transitionend', checkedPosition);


// // ---------------------------------------------------------------------------------------------------------------


const create_element = (width, height) => {
  document.querySelector('#Div1') ? document.querySelector('body').removeChild(document.querySelector('#Div1')) : console.log('nie ma');
  let element_to_create = document.createElement('div');
  element_to_create.setAttribute('id', 'Div1');
  let text = document.createTextNode('Width: ' + width + ' ' + 'Height: ' + height);
  element_to_create.style.width = width + 'px';
  element_to_create.style.height = height + 'px';
  element_to_create.style.background = 'lime';
  element_to_create.appendChild(text);
  document.querySelector('body').appendChild(element_to_create);
};

const take_width_and_height = (event) => {
  let takeWidth = event.target.clientWidth;
  let takeHeight = event.target.clientHeight;
  return create_element(takeWidth, takeHeight);
};
window.addEventListener('click', take_width_and_height);