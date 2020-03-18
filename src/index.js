
exports.min = function min (array) {
    if(array === undefined || array.length === 0){
        return 0;
    }
    var min1 = array[0];
    array.forEach(element => {
        if(element<min1){
            min1 = element;
        }
    });
  return min1;
}

exports.max = function max (array) {
        if (array === undefined || array.length === 0) {
            return 0;
        }
  var max1 = array[0];
  array.forEach(element => {
      if (element > max1) {
          max1 = element;
      }
  });
  return max1;
}

exports.avg = function avg (array) {
        if (array === undefined || array.length === 0) {
            return 0;
        }
 var avg = 0;
 array.forEach(element => avg += element)
 return avg/array.length;
}
