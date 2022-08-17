'use babel';

import React, { useEffect, useState } from 'react';

import { AlwaysOnTopIcon } from './always-on-top-icon';

export const AlwaysOnTopButton = () => {
  const [alwaysOnTop, setAlwaysOnTop] = useState(() =>
    inkdrop.window.isAlwaysOnTop()
  );

  // listens to the always on top command and updates local state
  useEffect(() => {
    return inkdrop.commands.add(document.body, 'always-on-top:toggle', () => {
      setAlwaysOnTop(inkdrop.window.isAlwaysOnTop());
    }).dispose;
  }, []);

  return (
    <div className="editor-header-always-on-top">
      <button
        onClick={() => {
          inkdrop.commands.dispatch(document.body, 'always-on-top:toggle');
        }}
        title="Toggle Always On Top"
        className="always-on-top-button"
      >
        <AlwaysOnTopIcon
          title="Toggle Always On Top"
          titleId="always-on-top-icon"
          className="svg-icon streamline always-on-top"
          style={{
            fill: alwaysOnTop
              ? 'var(--primary-color)'
              : 'var(--light-text-color)',
          }}
        />
      </button>
    </div>
  );
};
