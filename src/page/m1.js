import axios from 'axios';

function Fn1() {
  axios.get('http://127.0.0.1/api').then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}

export {
  Fn1
};
