import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import './Window.css';

const BASE = 'zowe-apps-playground';

const Window: React.FC<any> = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });

  const handleResize = (_: any, { size }: any) => {
    setWindowSize(size);
  };

  return (
    <Draggable handle=".window-titlebar">
      <Resizable
        width={windowSize.width}
        height={windowSize.height}
        minConstraints={[400, 300]}
        onResize={handleResize}
      >
        <div className="window" style={{
          width: windowSize.width + 'px',
          height: windowSize.height + 'px',
        }}>
          <div className="window-titlebar">
            <div className="window-controls">
              <button style={{
                background: 'none',
                border: 'none',
                padding: 0,
              }}>
                <img style={{
                  width: '14px',
                }} src={`/${BASE}/close-active.png`} alt='icon' />
              </button>
              <button style={{
                background: 'none',
                border: 'none',
                padding: 0,
              }}>
                <img style={{
                  width: '14px',
                  margin: '0 8px',
                }} src={`/${BASE}/minimize-active.png`} alt='icon' />
              </button>
              <button style={{
                background: 'none',
                border: 'none',
                padding: 0,
              }}>
                <img style={{
                  width: '14px',
                }} src={`/${BASE}/expand-active.png`} alt='icon' />
              </button>
            </div>
            <div className="window-title">App Store</div>
          </div>
          <div className="window-content">{children}</div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Window;
