'use babel';

import React, { memo } from 'react';

const SvgComponent = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    aria-labelledby={titleId}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <line x1="12" y1="5.248" x2="12" y2="23.248" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
    <polyline points="8.25 8.998 12 5.248 15.75 8.998" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></polyline>
    <line x1="0.75" y1="0.748" x2="23.25" y2="0.748" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
  </svg>
);

export const AlwaysOnTopIcon = memo(SvgComponent);
