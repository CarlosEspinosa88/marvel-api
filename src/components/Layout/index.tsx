import React, { ReactNode, FC } from 'react';

type PropsChild = {
  children?: ReactNode
};

export const Layout: FC<PropsChild> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

