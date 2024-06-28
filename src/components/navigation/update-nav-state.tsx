"use client";

import React, { useEffect, useContext } from "react";
import { NavigationContext } from "@/context/navigation-context";

interface UpdateNavStateProps {
  isInverted: boolean;
}

const UpdateNavState: React.FC<UpdateNavStateProps> = ({ isInverted }) => {
  const { setNavState } = useContext(NavigationContext);

  useEffect(() => {
    setNavState({ isInverted });
  }, [isInverted, setNavState]);

  return null;
};

export default UpdateNavState;
