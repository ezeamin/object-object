'use client';

import { SessionProvider } from 'next-auth/react';

interface Props {
  children?: React.ReactNode;
}

const NextAuthSessionProvider = (props: Props) => {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
