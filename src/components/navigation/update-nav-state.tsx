"use client";

import React, { useEffect, useContext } from "react";
import { NavigationContext } from "@/context/navigation-context";

interface UpdateNavStateProps {
  isInverted: boolean;
  isFixed?: boolean;
}

const UpdateNavState: React.FC<UpdateNavStateProps> = ({
  isInverted,
  isFixed,
}) => {
  const { setNavState } = useContext(NavigationContext);

  useEffect(() => {
    setNavState({ isInverted, isFixed: isFixed || true });
  }, [isInverted, setNavState, isFixed]);

  return null;
};

export default UpdateNavState;
