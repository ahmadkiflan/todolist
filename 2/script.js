const input = document.getElementById("inputCheck");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function palindromeCheck() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    console.log(
      `${value} di balik menjadi ${reverse}. Maka ini adalah Palindrome!`
    );
  } else {
    console.log(
      `${value} di balik menjadi ${reverse}. Maka ini BUKAN Palindrome!`
    );
  }
}
