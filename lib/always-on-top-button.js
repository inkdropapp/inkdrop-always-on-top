'use babel';

import React, { useState } from 'react';

import { AlwaysOnTopIcon } from './always-on-top-icon';

export const AlwaysOnTopButton = () => {
  const [alwaysOnTop, setAlwaysOnTop] = useState(() =>
    inkdrop.window.isAlwaysOnTop()
  );

  return (
    <button
      onClick={() => {
        inkdrop.commands.dispatch(document.body, 'always-on-top:toggle');
        setAlwaysOnTop(inkdrop.window.isAlwaysOnTop());
      }}
      title="Toggle Always On Top"
      className="always-on-top-button mde-toolbar-item"
    >
      <AlwaysOnTopIcon
        title="Toggle Always On Top"
        titleId="always-on-top-icon"
        className="svg-icon streamline always-on-top"
        fill={alwaysOnTop ? 'green' : '#fff'}
      />
    </button>
  );
};
