"use client";

import { createContext, useState } from "react";

interface CaseStudyContextType {
  caseStudyState: { relatedIndustries: string[]; relatedServices: string[] };
  setCaseStudyState: React.Dispatch<
    React.SetStateAction<{
      relatedIndustries: string[]; // Update the type of relatedIndustries to remove the optional and undefined
      relatedServices: string[];
    }>
  >;
}

export const CaseStudyContext = createContext<CaseStudyContextType>({
  caseStudyState: {
    relatedIndustries: [],
    relatedServices: [],
  },
  setCaseStudyState: () => {},
});

export const CaseStudyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [caseStudyState, setCaseStudyState] = useState<{
    relatedIndustries: string[];
    relatedServices: string[];
  }>({
    relatedIndustries: [],
    relatedServices: [],
  });

  return (
    <CaseStudyContext.Provider value={{ caseStudyState, setCaseStudyState }}>
      {children}
    </CaseStudyContext.Provider>
  );
};
