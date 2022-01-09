export type Complexity = "low" | "medium" | "high";
export type Casing = "capitalize" | "upper" | "lower";

export interface IOptions {
  casing?: Casing;
  complexity?: Complexity;
}

interface IMonsterProps {
  color?: string;
  eyeAmount?: number;
  eyes?: string;
  pattern?: string;
  mood?: string;
  size?: string;
  shape?: string;
  type?: string;
}

export interface IMonster {
  stringified: string;
  properties: IMonsterProps;
}
