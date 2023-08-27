import { numberMaskProcess } from "./masks/numberMask";
import { Mask, MaskOptions } from "./types";

export default (el: HTMLTextAreaElement | HTMLInputElement, options: MaskOptions) => {
  switch (options.mask) {
    case Mask.number:
      numberMaskProcess(el, options);
      break;
    default:
      break;
  }
};
