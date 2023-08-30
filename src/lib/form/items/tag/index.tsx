import React from "react";
import { NamePath } from "antd/es/form/interface";

import { CleanFormLine } from "../clean-line";

interface TagProps {
  renderTag?: (value?: string) => React.ReactNode;
  value?: string;
}

const TagComponent: React.FC<TagProps> = ({ value, renderTag }) => {
  return renderTag ? <>{renderTag(value)}</> : value;
};

interface Props {
  name: NamePath;
  className?: string;
  renderTag?: (value?: string) => React.ReactNode;
}

export const TagItem: React.FC<Props> = ({ name, renderTag }) => {
  return (
    <CleanFormLine name={name}>
      <TagComponent renderTag={renderTag} />
    </CleanFormLine>
  );
};
