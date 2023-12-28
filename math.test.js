const { sum, subtract, multiplication, divide, shoppingList } = require('./math');


describe('test operations math', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('subtract 4 - 2 to  igual a 2', () => {
        expect(subtract(4, 2)).toBe(2);
    });

    it('times 4 * 6 to  igual a 24', () => {
        expect(multiplication(4, 6)).toBe(24);
    });

    it('divide 10 / 5 to igual a 2', () => {
        expect(divide(10, 5)).toBe(2);
    });

    it('List contain leite', () => {
        expect(shoppingList).toContain('sabão');
    });
});