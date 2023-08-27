import { NumberMaskOptions } from "../types";

export const numberMaskProcess = (
  el: HTMLTextAreaElement | HTMLInputElement,
  options: NumberMaskOptions
) => {
  const {
    scale = 2,
    mapToRadix = [","],
    radix = ".",
    normalizeZeros = true,
    thousandSeparator = " ",
  } = options;

  const regxMapToRadix = new RegExp(mapToRadix.join(""), "g");
  const allowCharacters = /^[0-9-+,._\\/?~"\\|\s]*$/;

  el?.addEventListener("input", (e) => {
    const input = e?.target as HTMLTextAreaElement | HTMLInputElement;
    // allow characters only
    if (!allowCharacters.test(input.value)) {
      input.value = input.value.slice(0, -1);
    }

    if (!input || input.value.length < 1) return;

    // change default radix character
    input.value = input.value.replaceAll(".", radix);
    input.value = input.value.replaceAll(regxMapToRadix, radix);

    // allow only one radix character
    if ((input.value.split(radix) || [])?.length > 2) {
      input.value = input.value.slice(0, -1);
    }

    //scale after radix
    if (input.value.indexOf(radix) !== -1) {
      input.value =
        input.value.split(radix)[0] + radix + input.value.split(radix)[1]?.substring(0, scale);
    }

    // separates thousand
    if (input.value.indexOf(radix) === -1) {
      input.value = parseInt(input.value.replaceAll(thousandSeparator, ""))
        .toLocaleString("en-US")
        .replaceAll(",", thousandSeparator);
    }
  });

  el?.addEventListener("blur", (e) => {
    const input = e?.target as HTMLTextAreaElement | HTMLInputElement;
    if (!input || input.value.length < 1) return;

    //normalize zeros
    if (normalizeZeros && input.value.indexOf(radix) !== -1) {
      for (let i = 0; i < scale - input.value.split(radix)[1].length; i++) {
        input.value += "0";
      }
    }

    if (normalizeZeros && input.value.indexOf(radix) === -1) {
      input.value += radix;
      for (let i = 0; i < scale; i++) {
        input.value += "0";
      }
    }
  });
};
