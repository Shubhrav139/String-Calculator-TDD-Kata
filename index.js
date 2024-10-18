function add(num) {
  let delimiter = /\n|,/;
  let numbersString = num;

  if (num.startsWith("//")) {
    const delimiterEndIndex = num.indexOf("\n");
    delimiter = new RegExp(num.substring(2, delimiterEndIndex));
    numbersString = num.substring(delimiterEndIndex + 1);
  }

  if (numbersString.length > 1) {
    let values = numbersString.split(delimiter);
    let sum = 0;
    let negatives = [];

    for (let i = 0; i < values.length; i++) {
      let value = parseInt(values[i]);

      if (value < 0) {
        negatives.push(value);
      }

      sum += value;
    }

    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return sum;
  } else if (numbersString.length == 1) {
    return parseInt(numbersString);
  } else {
    return 0;
  }
}

module.exports = add;
