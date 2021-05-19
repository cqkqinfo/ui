import React from 'React';

export default <V extends unknown>({
  children,
  onChange = () => {},
  value,
}: {
  children: (onChange: (value: V) => void, value: V) => React.ReactElement;
  onChange: (value: V) => void;
  value: V;
}) => children(onChange, value);
