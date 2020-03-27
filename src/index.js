import './style.css';
import Icon from './fantasy.jpg';
import Data from './data.xml';
import displayM1 from './m1';

async function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // 动态加载lodash库
    const {
        default: _
    } = await import('lodash');
    // 动态加载print模块
    const printMe = await import('./print.js');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    console.log(Data);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

displayM1();

console.log('only change index.js file!');

setTimeout(() => {
    component().then(component => {
        document.body.appendChild(component);
    });
}, 10);

const ENV = process.env;

console.log('process.env: ', ENV);