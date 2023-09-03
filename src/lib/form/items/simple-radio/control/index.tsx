import React, { useCallback } from "react";
import classNames from "classnames";

import { ValueOption } from "src/lib/interfaces";
import s from "./index.module.scss";

interface Props {
  options: ValueOption[];
  label?: string;
  className?: string;
  value?: string;
  id?: string;
  onChange?: (newValue?: string) => void;
}

export const SimpleRadioControl: React.FC<Props> = ({ label, value, id, onChange, options, className }) => {
  const handleClick = useCallback(
    (newValue: string) => {
      onChange?.(newValue === value ? undefined : newValue);
    },
    [onChange, value]
  );

  return (
    <div className={classNames(s.root, className)}>
      <input type="hidden" id={id} value={value || ""} />
      {label ? <div className={s.label}>{label}</div> : null}
      <div className={s.group}>
        {options.map((option, i) => (
          <div className={classNames(s.option, { [s.option__active]: option.value === value })} key={i} onClick={() => handleClick(option.value)}>
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};
