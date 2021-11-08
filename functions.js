function checkPalindrome(rawWord) {
  const word = rawWord.toLowerCase().replace(/\s/g, "");
  if (word != "" && word !== undefined) {
    const reversedWord = word.split("").reverse().join("");
    if (word == reversedWord) {
      return { isPalindrome: true, reversedWord };
    } else {
      return { isPalindrome: false, reversedWord };
    }
  }
}

module.exports = checkPalindrome;
