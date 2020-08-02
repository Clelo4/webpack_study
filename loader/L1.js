function fn1() {
  a = 1;
  this1 = "I am this.";
  let arrowFn = () => { console.log(this); };
};