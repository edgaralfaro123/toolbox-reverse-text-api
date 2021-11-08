let expect = require("chai").expect;
let request = require("request");
const checkPalindrome = require("../functions");

it("Palindrome check and reverse word endpoint", function (done) {
  request(
    "http://localhost:4000/iecho?text=Aibohphobia",
    function (error, response, body) {
      //   console.log(`request.query`, request);
      const word = checkPalindrome("Aibohphobia");
      expect(word.isPalindrome).to.equal(true);
      //   expect(0).to.equal(0);
      done();
    }
  );
});

it("Palindrome check", function (done) {
  request(
    "http://localhost:4000/iecho?text=youttext",
    function (error, response, body) {
      //   console.log(`request.query`, request);
      const word = checkPalindrome("youttext");
      expect(word.isPalindrome).to.equal(false);
      //   expect(0).to.equal(0);
      done();
    }
  );
});
