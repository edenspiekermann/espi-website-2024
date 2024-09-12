"use client";

import React, { createContext, useState } from "react";

interface NavigationContextType {
  navState: { isInverted: boolean; isFixed: boolean };
  setNavState: React.Dispatch<
    React.SetStateAction<{ isInverted: boolean; isFixed: boolean }>
  >;
}

const defaultContextValue: NavigationContextType = {
  navState: { isInverted: false, isFixed: false },
  setNavState: () => {},
};

export const NavigationContext =
  createContext<NavigationContextType>(defaultContextValue);

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navState, setNavState] = useState({
    isInverted: false,
    isFixed: false,
  });

  return (
    <NavigationContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavigationContext.Provider>
  );
};
