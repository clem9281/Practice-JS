const { eatingCookies } = require("./index");

describe("Cookies", () => {
  it("should eat a small amount of cookeis", () => {
    expect(eatingCookies(0)).toBe(1);
    expect(eatingCookies(1)).toBe(1);
    expect(eatingCookies(2)).toBe(2);
    expect(eatingCookies(4)).toBe(7);
    expect(eatingCookies(5)).toBe(13);
    expect(eatingCookies(10)).toBe(274);
  });
  it("should eat a large amount of cookies", () => {
    const cache50 = new Array(51).fill(0);
    const cache100 = new Array(101).fill(0);
    expect(eatingCookies(50, cache50)).toBe(10562230626642);
    expect(eatingCookies(100, cache100)).toBe(180396380815100901214157639);
  });
});
