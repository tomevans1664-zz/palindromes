const utils = require('../utils');

describe('Utils Tests', () => {
    it('isPalindrome() Test Cases', () => {
        expect(utils.isPalindrome('abba')).toBe(true);
        expect(utils.isPalindrome('ab ba')).toBe(true);
        expect(utils.isPalindrome('a.bba')).toBe(true);
        expect(utils.isPalindrome('abb')).toBe(false);
    });
    it('isWithinTenMinutes() Test Cases', () => {
        const currentDate = new Date();
        const tenMinsAgo = new Date(currentDate.getTime() - 10 * 60000);
        const moreThanTenMinsAgo = new Date(tenMinsAgo.getTime() - 1);
        const lessThanTenMinsAgo = new Date(tenMinsAgo.getTime() + 1);

        expect(utils.isWithinTenMinutes(currentDate, tenMinsAgo)).toBe(true);
        expect(utils.isWithinTenMinutes(currentDate, moreThanTenMinsAgo)).toBe(false);
        expect(utils.isWithinTenMinutes(currentDate, lessThanTenMinsAgo)).toBe(true);
    });
    it('isString() Test Cases', () => {
        expect(utils.isString('abba')).toBe(true);
        expect(utils.isString('[]')).toBe(true);
        expect(utils.isString([])).toBe(false);
        expect(utils.isString({})).toBe(false);
        expect(utils.isString(new String('*'))).toBe(true);
    });
});