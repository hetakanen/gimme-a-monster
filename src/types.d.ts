export type Complexity = "low" | "medium" | "high";
export type Casing = "capitalize" | "upper" | "lower";

export interface IOptions {
  complexity?: Complexity;
  casing?: Casing;
}

interface IMonsterProps {
  color?: string;
  type?: string;
  mouth?: string;
  shape?: string;
  eyeAmount?: number;
  eyes?: string;
}

export interface IMonster {
  stringified: string;
  properties: IMonsterProps;
}

export interface ILowMonster extends IMonster {
  properties: {
    color: string;
    type: string;
  };
}

export interface IMediumMonster extends IMonster {
  properties: {
    [...ILowMonster];
    mouth: string;
    shape: string;
  };
}

export interface IHighMonster extends IMonster {
  properties: {
    [...ILowMonster];
    [...IMediumMonster];
    eyeAmount: number;
    eyes: string;
  };
}
