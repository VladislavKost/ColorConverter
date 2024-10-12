import { useEffect, useState } from "react";
import { ConvertResult } from "../ConvertResult";
import { ColorConverterForm } from "../ColorConverterForm";

import "./ColorConverter.css";

export const ColorConverter = () => {
  const [hex, setHex] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (!hex) {
      setResult("");
    } else if (hex === "Ошибка") {
      setResult("Ошибка");
    } else {
      const rgb = hexToRgb(hex);
      setResult(rgb);
    }
  }, [hex]);

  const hexToRgb = (hex: string): string => {
    return `rgb(${parseInt(hex.substring(1, 3), 16)}, ${parseInt(
      hex.substring(3, 5),
      16
    )}, ${parseInt(hex.substring(5, 7), 16)})`;
  };

  return (
    <div>
      <ColorConverterForm setHex={setHex} />
      <ConvertResult result={result} />
    </div>
  );
};
