import { useMemo } from "react";
import { Rule } from "antd/lib/form";

function maxLengthRule(length: number, message: string): Rule {
  return { max: length, message };
}

function minLengthRule(length: number, message: string): Rule {
  return { min: length, message };
}

// function lengthRule(length: number, message: string): Rule {
//   return { len: length, message };
// }

function onlyNumberRule(message: string): Rule {
  return { pattern: /^(\d*[.])?\d+$/i, message };
}

function onlyPositiveIntegerRule(message: string): Rule {
  return { pattern: /^\d+$/i, message };
}

export function useFormRules() {
  return useMemo<Record<string, Rule>>(
    () => ({
      Required: { required: true, message: "Required" },
      Email: { type: "email", message: "Email" },
      OnlyNumber: onlyNumberRule("Only Numbers"),
      OnlyPositiveInteger: onlyPositiveIntegerRule("Only Numbers"),
      MaxLength10: maxLengthRule(10, "Max length is 10"),
      MinLength6: minLengthRule(6, "Min length is 6"),
    }),
    []
  );
}
