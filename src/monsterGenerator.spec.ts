import { expect } from "chai";
import sinon from "sinon";
import { generate } from "./monsterGenerator";
import * as generator from "./randomValueGenerator";
import * as stringFormatter from "./stringFormatter";
import { Casing } from "./types";

describe("monster generator", () => {
  let formatSpy: sinon.SinonSpy<
    [str: string, casing?: Casing | undefined],
    string
  >;

  beforeEach(() => {
    formatSpy = sinon.spy(stringFormatter, "format");

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

  it("should create high complexity monster with max amount of fields", () => {
    const result = generate({ complexity: "high" });
    const expected = {
      stringified: "1 Test2 Test3 Test4 Test5 Test6 Test7 Test8",
      properties: {
        color: "Test6",
        eyeAmount: 1,
        eyes: "Test2",
        mood: "Test4",
        pattern: "Test7",
        shape: "Test5",
        size: "Test3",
        type: "Test8",
      },
    };
    expect(result).to.eql(expected);
    expect(formatSpy.calledOnce).to.be.true;
  });
  it("should create medium complexity monster with max amount of fields", () => {
    const result = generate({ complexity: "medium" });
    const expected = {
      stringified: "Test1 Test2 Test3 Test4 Test5 Test6",
      properties: {
        color: "Test4",
        mood: "Test2",
        pattern: "Test5",
        shape: "Test3",
        size: "Test1",
        type: "Test6",
      },
    };
    expect(result).to.eql(expected);
    expect(formatSpy.calledOnce).to.be.true;
  });
  it("should create low complexity monster with max amount of fields", () => {
    const result = generate({ complexity: "low" });
    const expected = {
      stringified: "Test1 Test2 Test3",
      properties: {
        color: "Test1",
        pattern: "Test2",
        type: "Test3",
      },
    };
    expect(result).to.eql(expected);
    expect(formatSpy.calledOnce).to.be.true;
  });
});
