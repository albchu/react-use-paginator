import React from 'react';

const CodeSandbox = ({ link }) => {
  return (
    <iframe
      src={link}
      style={{
        width: '100%',
        height: 600,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      title='codesandy'
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    ></iframe>
  );
};

export default CodeSandbox;
