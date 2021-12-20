import { expect } from "chai";
import sinon from "sinon";
import { generate } from "./monsterGenerator";
import * as generator from "./randomValueGenerator";
import * as stringFormatter from "./stringFormatter";
import { Casing } from "./types";

describe("monster generator", () => {
  let formatSpy: sinon.SinonSpy<[str: string, casing?: Casing | undefined], string>;

  beforeEach(() => {
    formatSpy = sinon.spy( stringFormatter, "format" );

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
    const result = generate("high");
    const expected = {
      stringified: "1 Test2 Test3 Test4 Test5 Test6",
      properties: {
        color: "Test5",
        type: "Test6",
        eyeAmount: 1,
        eyes: "Test2",
        mouth: "Test3",
        shape: "Test4",
      },
    };
    expect(result).to.eql(expected);
    expect( formatSpy.calledOnce ).to.be.true;
  });
  it("should create medium complexity monster with max amount of fields", () => {
    const result = generate("medium");
    const expected = {
      stringified: "Test1 Test2 Test3 Test4",
      properties: {
        color: "Test3",
        mouth: "Test1",
        shape: "Test2",
        type: "Test4",
      },
    };
    expect(result).to.eql(expected);
    expect( formatSpy.calledOnce ).to.be.true;
  });
  it("should create low complexity monster with max amount of fields", () => {
    const result = generate("low");
    const expected = {
      stringified: "Test1 Test2",
      properties: {
        color: "Test1",
        type: "Test2",
      },
    };
    expect(result).to.eql(expected);
    expect( formatSpy.calledOnce ).to.be.true;
  });
});
