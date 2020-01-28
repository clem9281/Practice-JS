const { earliestAncestor } = require("./index");

/*
       10
     /
    1   2   4  11
     \ /   / \ /
      3   5   8
       \ / \   \
        6   7   9

        */

describe("Earliest Ancestor", () => {
  it("should work", () => {
    const test_ancestors = [
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [8, 9],
      [11, 8],
      [10, 1]
    ];
    expect(earliestAncestor(test_ancestors, 1)).toBe(10);
    expect(earliestAncestor(test_ancestors, 2)).toBe(-1);
    expect(earliestAncestor(test_ancestors, 3)).toBe(10);
    expect(earliestAncestor(test_ancestors, 4)).toBe(-1);
    expect(earliestAncestor(test_ancestors, 5)).toBe(4);
    expect(earliestAncestor(test_ancestors, 6)).toBe(10);
    expect(earliestAncestor(test_ancestors, 7)).toBe(4);
    expect(earliestAncestor(test_ancestors, 8)).toBe(4);
    expect(earliestAncestor(test_ancestors, 9)).toBe(4);
    expect(earliestAncestor(test_ancestors, 10)).toBe(-1);
    expect(earliestAncestor(test_ancestors, 11)).toBe(-1);
  });
});
