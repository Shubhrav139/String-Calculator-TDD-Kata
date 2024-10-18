function add(num) {
  if (num.length > 1) {
    let re = /\n|,/;
    let values = num.split(re);
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
      sum += parseInt(values[i]);
    }

    return sum;
  } else if (num.length == 1) {
    return parseInt(num);
  } else {
    return 0;
  }
}

module.exports = add;
