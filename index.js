'use strict';

const calculator = function(points, divisor){
  let count = Math.floor(points / divisor);
  let remainder = points % divisor;
  let returns = count * 2;

  remainder = remainder + returns;

  if(remainder > divisor){
    count = count + calculator(remainder + returns, divisor);
  }

  return count;
};

let num = calculator(174,12);

console.log("num is ", num);
