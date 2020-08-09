// Dependencies
import * as React from 'react';

type Props = {
  className?: string;
};

const ArrowLeft: React.FC<Props> = props => (
  <svg width="451pt" height="451pt" viewBox="-22 0 451 451" {...props}>
    <path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
  </svg>
);

export default ArrowLeft;
