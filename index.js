const express = require('express');
const app = express();
const port = 3000;
const utils = require("./utils.js");

const { startDatabase } = require('./db/mongo');
const { insertPalindrome, getPalindromes } = require('./controllers/palindrome');

app.post('/palindromes/:string', async (req, res) => {
    const string = req.params.string;
    const isString = utils.isString(string);
    if (!isString) return false;

    const isPalindrome = utils.isPalindrome(string);
    if (isPalindrome) await insertPalindrome({ text: string });
    return res.send(isPalindrome)
});

app.get('/palindromes', async (req, res) => {
    res.send(await getPalindromes());
});

startDatabase().then(async () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

