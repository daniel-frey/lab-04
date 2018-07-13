'use strict';

var nums =[];
var doubles = [];

function getRandomNums() {
  for(var i = 0; i < 1001; i++); {
    var randNum = Math.floor(Math.random() * 100 );
    nums.push(randNum);
  }
}

getRandomNums();

function duplicateNum(number) {
  var output = number * 2;
  return output;
}


for (var j= 0; j < nums.length; j++) {
  var duplicate = duplicateNum(nums[j]);
  doubles.push(duplicate);
}


