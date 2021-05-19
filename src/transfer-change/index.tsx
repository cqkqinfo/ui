import React from 'React';

export default ({
  children,
  onChange = () => {},
  value,
}: {
  children: (onChange: (value: any) => void, value: any) => React.ReactElement;
  onChange: (value: any) => void;
  value: any;
}) => children(onChange, value);
