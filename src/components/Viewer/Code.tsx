'use client';

import Highlight from 'react-highlight';

import 'highlight.js/styles/base16/monokai.css';

interface Props {
  children: React.ReactNode;
}

const Code = (props: Props) => {
  const { children } = props;

  return <Highlight>{children}</Highlight>;
};
export default Code;
