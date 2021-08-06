module.exports = function toReadable (number) {
  let Ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let Tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let Twos = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let realNumber = number.toString();
  let tensNumberCheck = Number(`${realNumber[1]}${realNumber[2]}`); 
    if (number <= 9) {
        return (Ones[number]);
  } else if (number >= 10 && number <= 19) {
        return (Tens[(realNumber[1])]);
  } else if ((number >=20 && number <= 99 && number % 10 === 0))  {
        return (`${Twos[realNumber[0]]}`)
  }
    else if (number >=20 && number <= 99 && number %10 !== 0) {
        return (`${Twos[realNumber[0]]} ${Ones[realNumber[1]]}`)
  }



    else if (number >= 100 && number <= 999 && number % 100 === 0) {
        return `${Ones[realNumber[0]]} hundred`
  }

    else if (number >= 100 && number <= 999 && tensNumberCheck >= 01 && tensNumberCheck<= 9) {
    return `${Ones[realNumber[0]]} hundred ${Ones[realNumber[2]]}`
}

    else if (number >= 100 && number <= 999 && tensNumberCheck >= 10 && tensNumberCheck<= 19) {
        return `${Ones[realNumber[0]]} hundred ${Tens[realNumber[2]]}`
    }

    else if (number >= 100 && number <= 999 &&  (tensNumberCheck >=20 && tensNumberCheck <= 99 && tensNumberCheck % 10 === 0)) {
        return `${Ones[realNumber[0]]} hundred ${Twos[realNumber[1]]}`
  }

  else if (number >= 100 && number <= 999 &&  (tensNumberCheck >=20 && tensNumberCheck <= 99 && tensNumberCheck % 10 !== 0)) {
    return `${Ones[realNumber[0]]} hundred ${Twos[realNumber[1]]} ${Ones[realNumber[2]]}`
}

}






/* let Hundreds = "hundreed"; */
