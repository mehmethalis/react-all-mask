import { useEffect, useRef } from "react";

import Masker, { MaskOptions } from ".";

export function useReactAllMask<T extends HTMLInputElement | HTMLTextAreaElement>(
  options: MaskOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      Masker(ref.current, options);
    }
  }, [options, ref]);

  return [ref];
}
