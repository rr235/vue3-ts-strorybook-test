export enum Variants {
  dark,
  light
}

export enum Sizes {
  large,
  small
}

export const variants = Object.values(Variants).filter(x => typeof x === "string");
export const sizes = Object.values(Sizes).filter(x => typeof x === "string");