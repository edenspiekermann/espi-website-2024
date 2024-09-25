"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);

  return <>{children}</>;
}
