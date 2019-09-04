module.exports = {
    isPalindrome: (string) => {
        var re = /[\W_]/g;
        var lowRegStr = string.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    },
    isWithinTenMinutes: (currentDate, oldDate) => {
        const tenMinutesAgo = new Date(currentDate.getTime() - 10 * 60000);
        return tenMinutesAgo.getTime() <= oldDate.getTime();
    },
    isString: (string) => {
        return typeof string === 'string' || string instanceof String;
    }
};