import { expect } from "chai";
import sinon from "sinon";
import { getRandomValue, getRandomNumber } from "./randomValueGenerator";

describe("value", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return red when random returns 0", () => {
    sinon.stub(Math, "random").returns(0);
    const result = getRandomValue(["red", "blue", "green", "yellow", "purple"]);
    expect(result).to.eql("red");
  });

  it("should return max value when random returns 1", () => {
    sinon.stub(Math, "random").returns(1);
    const result = getRandomValue(["red", "blue", "green", "yellow", "purple"]);
    expect(result).to.eql("purple");
  });

  it("should return green when random returns 0.5", () => {
    sinon.stub(Math, "random").returns(0.5);
    const result = getRandomValue(["red", "blue", "green", "yellow", "purple"]);
    expect(result).to.eql("green");
  });
});

describe("number", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return 0 when random returns 0", () => {
    sinon.stub(Math, "random").returns(0);
    const result = getRandomNumber(5);
    expect(result).to.eql(0);
  });

  it("should return max value when random returns 1", () => {
    sinon.stub(Math, "random").returns(1);
    const result = getRandomNumber(5);
    expect(result).to.eql(5);
  });

  it("should return 2 when random returns 0.5", () => {
    sinon.stub(Math, "random").returns(0.5);
    const result = getRandomNumber(5);
    expect(result).to.eql(2);
  });
});
