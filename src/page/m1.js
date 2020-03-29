const axios = require('axios');

function Fn1() {
  axios.get('http://127.0.0.1/api').then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = {
  func: Fn1
};


function* GeneratorOne() {
  console.log('Start Generatro function...');
  console.log('one: ', yield 'One');
  console.log('two: ', yield 'Two');
  return 'ending';
}
var one = GeneratorOne();
one.next(1);
// Output: 
// Start Generatro function...
// {value: "One", done: false}
one.next(2);
// Output: 
// {value: "Two", done: false}
one.next(3);
// Output: 
// {value: "ending", done: true}
one.next(4);
// Output: 
// {value: undefined, done: true}
