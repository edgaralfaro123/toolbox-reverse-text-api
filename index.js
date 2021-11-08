const express = require("express");
const cors = require("cors")
const app = express();
const port = 4000;
const checkPalindrome = require("./functions");

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
app.use(cors());
app.get("/iecho", (req, res) => {
  const { text } = req.query;
  if (text != undefined && text != "") {
    const word = checkPalindrome(text);
    if (word.isPalindrome) {
      res.status(200).json({ text: word.reversedWord, palindrome: true });
    } else {
      res.status(200).json({ text: word.reversedWord, palindrome: false });
    }
  } else {
    res.status(400).json({ error: "no text" });
  }
});
