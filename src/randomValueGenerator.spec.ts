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

    describe("without min", () => {
      it("should return 0 when random returns 0", () => {
        sinon.stub(Math, "random").returns(0);
        const result = getRandomNumber(max);
        expect(result).to.eql(0);
      });

      it("should return max value when random returns 0.99", () => {
        sinon.stub(Math, "random").returns(0.99);
        const result = getRandomNumber(max);
        expect(result).to.eql(5);
      });

      // Math random never returns 1
      it("should return one over max value when random returns 1", () => {
        sinon.stub(Math, "random").returns(1);
        const result = getRandomNumber(max);
        expect(result).to.eql(6);
      });

      it("should return 3 when random returns 0.5", () => {
        sinon.stub(Math, "random").returns(0.5);
        const result = getRandomNumber(max);
        expect(result).to.eql(3);
      });
    });

    describe("with min", () => {
      const min = 1;
      it("should return 1 when random returns 0", () => {
        sinon.stub(Math, "random").returns(0);
        const result = getRandomNumber(max, min);
        expect(result).to.eql(1);
      });
    });
  });
});
