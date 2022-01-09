import { expect } from "chai";
import sinon from "sinon";
import { getRandomValue, getRandomNumber } from "./randomValueGenerator";

describe("random value generator", () => {
  describe("get random value", () => {
    const values = ["red", "blue", "green", "yellow", "purple"];
    afterEach(() => {
      sinon.restore();
    });

    it("should return red when random returns 0", () => {
      sinon.stub(Math, "random").returns(0);
      const result = getRandomValue(values);
      expect(result).to.eql("red");
    });

    it("should return max value when random returns 0.99", () => {
      sinon.stub(Math, "random").returns(0.99);
      const result = getRandomValue(values);
      expect(result).to.eql("purple");
    });

    // Math random never returns 1
    it("should return undefined when random returns 1", () => {
      sinon.stub(Math, "random").returns(1);
      const result = getRandomValue(values);
      expect(result).to.eql(undefined);
    });

    it("should return green when random returns 0.5", () => {
      sinon.stub(Math, "random").returns(0.5);
      const result = getRandomValue(values);
      expect(result).to.eql("green");
    });
  });

  describe("get random number", () => {
    const max = 5;
    afterEach(() => {
      sinon.restore();
    });

    it("should return 0 when random returns 0", () => {
      sinon.stub(Math, "random").returns(0);
      const result = getRandomNumber(max);
      expect(result).to.eql(0);
    });

    it("should return max value when random returns 1", () => {
      sinon.stub(Math, "random").returns(1);
      const result = getRandomNumber(max);
      expect(result).to.eql(5);
    });

    it("should return 2 when random returns 0.5", () => {
      sinon.stub(Math, "random").returns(0.5);
      const result = getRandomNumber(max);
      expect(result).to.eql(2);
    });
  });
});
