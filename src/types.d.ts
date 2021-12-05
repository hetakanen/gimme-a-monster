export type Complexity = "low" | "medium" | "high";
export type Casing = "capitalize" | "upper" | "lower";

export interface IOptions {
  complexity?: Complexity;
  casing?: Casing;
}

export interface IMonster {
  color: string;
  type: string;
  stringify: string;
}

export interface IMediumMonster extends IMonster {
  mouth: string;
  shape: string;
}

export interface IHighMonster extends IMediumMonster {
  eyeAmount: number;
  eyes: string;
}
