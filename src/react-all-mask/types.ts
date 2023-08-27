enum Mask {
  number = "number",
  pattern = "pattern",
}

type NumberMaskOptions = {
  scale?: number;
  thousandSeparator?: string;
  padFractionalZeros?: boolean;
  normalizeZeros?: boolean;
  radix?: string;
  mapToRadix?: string[];
  min?: number;
  max?: number;
  mask: Mask.number;
};
type PatternMaskOptions = {
  mask: Mask.pattern;
};

type MaskOptions = NumberMaskOptions | PatternMaskOptions;

export { Mask };
export type { MaskOptions, NumberMaskOptions };
