import './style';
import Icon from './fantasy.jpg';
import displayM1 from './m1';
import './c1';
import { M1_NAME } from 'm1';

async function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // 动态加载lodash库
  const {
    default: _
  } = await import('lodash');
  // 动态加载print模块
  const printMe = await import('./print.js');
  element.innerHTML = _.join(['Hello', 'webpack, Jack'], ' ');
  element.classList.add('hello');
  element.classList.add('c1');

  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  btn.style="color: red;"

  element.appendChild(btn);

  return element;
}

displayM1();

console.log('only change index.js file!');

setTimeout(() => {
  component().then(component => {
    document.body.appendChild(component);
  });
  document.title = M1_NAME;
});

const ENV = process.env;

console.log('process.env: ', ENV);

