const { RingBuffer } = require("./index");

describe("RingBuffer", () => {
  let buffer;
  let buffer2;
  beforeEach(() => {
    buffer = new RingBuffer(5);
    buffer2 = new RingBuffer(5);
  });
  it("should work", () => {
    expect(buffer.storage.len()).toBe(0);

    buffer.append("a");
    buffer.append("b");
    buffer.append("c");
    buffer.append("d");
    expect(buffer.storage.len()).toBe(4);
    expect(buffer.get()).toEqual(["a", "b", "c", "d"]);

    buffer.append("e");
    expect(buffer.storage.len()).toBe(5);
    expect(buffer.get()).toEqual(["a", "b", "c", "d", "e"]);

    buffer.append("f");
    expect(buffer.storage.len()).toBe(5);
    expect(buffer.get()).toEqual(["f", "b", "c", "d", "e"]);

    buffer.append("g");
    buffer.append("h");
    buffer.append("i");
    expect(buffer.storage.len()).toBe(5);
    expect(buffer.get()).toEqual(["f", "g", "h", "i", "e"]);

    buffer.append("j");
    buffer.append("k");
    expect(buffer.get()).toEqual(["k", "g", "h", "i", "j"]);
    for (let i = 0; i < 50; i++) {
      buffer2.append(i);
    }

    expect(buffer2.get()).toEqual([45, 46, 47, 48, 49]);
  });
});
