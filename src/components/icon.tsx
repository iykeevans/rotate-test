import React from "react";

interface IProps {
  name: string;
  className?: string;
  style?: any;
}

const Icon = (props: IProps) => {
  const { name, className, style = "" } = props;

  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
