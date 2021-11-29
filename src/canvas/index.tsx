import React from 'react';

export default React.forwardRef((props: any, ref) => {
  return <canvas {...props} ref={ref} />;
});
