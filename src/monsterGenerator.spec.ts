import { expect } from "chai";
import sinon from "sinon";
import { generate } from "./monsterGenerator";
import * as generator from "./randomValueGenerator";

describe("monster generator", () => {
  beforeEach(() => {
    let index = 1;
    sinon.stub(generator, "getRandomValue").callsFake(() => {
      return "Test" + index++;
    });
    sinon.stub(generator, "getRandomNumber").callsFake(() => {
      return index++;
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should create monster with high random values", () => {
    const result = generate("high");
    const expected = {
      color: "Test5",
      type: "Test6",
      stringify: "1 Test2 Test3 Test4 Test5 Test6",
      eyeAmount: 1,
      eyes: "Test2",
      mouth: "Test3",
      shape: "Test4",
    };
    expect(result).to.eql(expected);
  });
  it("should create monster with medium random values", () => {
    const result = generate("medium");
    const expected = {
      color: "Test3",
      mouth: "Test1",
      shape: "Test2",
      stringify: "Test1 Test2 Test3 Test4",
      type: "Test4",
    };
    expect(result).to.eql(expected);
  });
  it("should create monster with low random values", () => {
    const result = generate("low");
    const expected = {
      color: "Test1",
      stringify: "Test1 Test2",
      type: "Test2",
    };
    expect(result).to.eql(expected);
  });
});
