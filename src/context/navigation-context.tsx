"use client";

import React, { createContext, useState } from "react";

interface NavigationContextType {
  navState: { isInverted: boolean };
  setNavState: React.Dispatch<React.SetStateAction<{ isInverted: boolean }>>;
}

const defaultContextValue: NavigationContextType = {
  navState: { isInverted: false },
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
  });

  return (
    <NavigationContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavigationContext.Provider>
  );
};
