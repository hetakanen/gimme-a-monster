import { expect } from "chai";
import { format } from "./stringFormatter";

describe("string formatter", () => {
  describe("capitalize", () => {
    it("should capitalize only first letter", () => {
      const value = "test 1 test 2 test 3";
      const result = format(value, "capitalize");
      expect(result).to.eql("Test 1 test 2 test 3");
    });

    it("should return empty if empty value is given", () => {
      const value = "";
      const result = format(value, "capitalize");
      expect(result).to.eql("");
    });
  });

  describe("empty", () => {
    it("should return as it is", () => {
      const value = "test 1 test 2 test 3";
      const result = format(value);
      expect(result).to.eql("test 1 test 2 test 3");
    });
  });

  describe("upper", () => {
    it("should upper all letters", () => {
      const value = "test 1 test 2 test 3";
      const result = format(value, "upper");
      expect(result).to.eql("TEST 1 TEST 2 TEST 3");
    });
  });

  describe("lower", () => {
    it("should lower all letters", () => {
      const value = "TEST 1 TEST 2 TEST 3";
      const result = format(value, "lower");
      expect(result).to.eql("test 1 test 2 test 3");
    });
  });
});
