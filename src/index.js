
exports.min = function min (array) {
  if (!array || 0 === array.length){
  return 0;
  }
  else {
  let x = Math.min.apply(0,array)
  return x;
  }
}

exports.max = function max (array) {
  if (!array || 0 === array.length){
    return 0;
    }
    else {
      let y = Math.max.apply(0, array);
      return y;
    }
}

exports.avg = function avg (array) {
  if (!array || 0 === array.length){
    return 0;
    }
    else {
      let sum = 0;
      for (let i = 0; i < array.length; i++){
        sum += array[i];
      }
      let x = sum / array.length;
      return x;
    }
}
