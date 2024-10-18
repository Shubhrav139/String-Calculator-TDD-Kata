function add(num) {
  let delimiter = /\n|,/;
  let numbersString = num;

  if (num.startsWith("//")) {
    const delimiterEndIndex = num.indexOf("\n");
    let delimiterString = num.substring(2, delimiterEndIndex);
    if (
      delimiterString[0] == "[" &&
      delimiterString[delimiterString.length - 1] == "]"
    ) {
      delimiterString.substring(1, delimiterString.length - 1);
    }
    delimiter = new RegExp(delimiterString);
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
      } else if (value <= 1000) {
        sum += value;
      }
    }

    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return sum;
  } else if (numbersString.length == 1) {
    let value = parseInt(numbersString);

    return value > 1000 ? 0 : value;
  } else {
    return 0;
  }
}

module.exports = add;
