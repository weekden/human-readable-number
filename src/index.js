module.exports = function toReadable (number) {
  if (number > 999 || number < -1) return;
	const parseNumber = number.toString();
	const numberLenght = parseNumber.length;
	let finalString = '';
	const arrSingle = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const arrDubles = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const arrTens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const recidueOfHunderd = number - parseNumber[0] * 100;
	// Create function for calc dublescoin
	function tens(num) {
		if (num < 10) {
			finalString = arrSingle[num];
		}
		if (num === 10) {
			finalString = arrTens[0];
		} else if (num < 20 && num > 10) {
			finalString = arrDubles[num - 11];
		} else if (num > 19 && num < 100) {
			if (num % 10 === 0) {
				finalString = arrTens[num / 10 - 1];
			} else finalString = `${arrTens[Math.floor(num / 10 - 1)]} ${arrSingle[num % 10]}`;
		}
		return finalString;
	}

	switch (numberLenght) {
		case 1:
			finalString = arrSingle[number];
			break;
		case 2:
			tens(number);
			break;
		case 3:
			if (number % 100 === 0) {
				finalString = `${arrSingle[number / 100]} hundred`;
			} else finalString = `${arrSingle[Math.floor(number / 100)]} hundred ${tens(recidueOfHunderd)}`;
			break;
	}
	return finalString;
}
