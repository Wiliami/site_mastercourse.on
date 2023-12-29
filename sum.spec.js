const { sum } = require('./math');

describe("Initial tests", () => {
    test('First unit tests', () => {
        const firstArgument = 7;
        const secondArgument = 1;
    
        const result = sum(firstArgument, secondArgument);
        expect(result).toEqual(8);
    });
});