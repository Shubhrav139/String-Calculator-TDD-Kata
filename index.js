function add(num) {
  if (num.length > 1) {
    let [val1, val2] = num.split(",");
    return parseInt(val1) + parseInt(val2);
  } 
  else if (num.length == 1) {
    return parseInt(num);
  }
  else {
    return 0;
  }
}

module.exports = add;
