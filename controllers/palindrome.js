const { getDatabase } = require('../db/mongo');
const utils = require("../utils.js");

const collectionName = 'palindromes';

async function insertPalindrome(palindrome) {
    console.log(palindrome)
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionName)
        .insertOne({...palindrome, date: new Date()});
    return insertedId;
}

async function getPalindromes() {
    const currentDate = new Date();
    const database = await getDatabase();
    const palindromes = await database.collection(collectionName)
        .find({})
        .sort({ date: -1 })
        .limit(10)
        .toArray();
    return palindromes
        .filter(palindrome => utils.isWithinTenMinutes(currentDate, palindrome.date));
}

module.exports = {
    insertPalindrome,
    getPalindromes,
};