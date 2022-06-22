const singleDigitNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const twoDigitNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decimalNumbers = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
  let result = '';
  let array = String(number).split('');
  if (number >= 0 && number < 10) {
    result += singleDigitNumbers[number]
  }
  if (number >= 10 && number < 20) {
    result += twoDigitNumbers[array[1]];
  }
  if (number >= 20 && number < 100) {
    if (array[1] === '0') {
      result = decimalNumbers[array[0]];
    } else {
      result = `${decimalNumbers[array[0]]} ${singleDigitNumbers[array[1]]}`;
    }
  }
  if (number >= 100 && number <= 999) {
    if (array[1] === '0' && array[2] === '0') {
      result = singleDigitNumbers[array[0]] + ' hundred';
    } else if (array[1] === '0') {
      result = `${singleDigitNumbers[array[0]]} hundred ${singleDigitNumbers[array[2]]}`;
    } else if (array[2] === '0') {
      result = `${singleDigitNumbers[array[0]]} hundred ${decimalNumbers[array[1]]}`;
    } else if (array[1] === '1') {
      result = `${singleDigitNumbers[array[0]]} hundred ${twoDigitNumbers[array[2]]}`;
    }
    else {
      result = `${singleDigitNumbers[array[0]]} hundred ${decimalNumbers[array[1]]} ${singleDigitNumbers[array[2]]}`;
    }
  }
  return result;
}
