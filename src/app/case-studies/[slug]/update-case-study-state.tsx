"use client";

import React, { useEffect, useContext } from "react";
import { CaseStudyContext } from "@/context/case-study-context";

interface UpdateCaseStudyStateProps {
  relatedIndustries: string[];
  relatedServices: string[];
}

const UpdateCaseStudyState: React.FC<UpdateCaseStudyStateProps> = ({
  relatedIndustries,
  relatedServices,
}) => {
  const { setCaseStudyState } = useContext(CaseStudyContext);

  useEffect(() => {
    setCaseStudyState({ relatedIndustries, relatedServices });
  }, [relatedIndustries, relatedServices, setCaseStudyState]);

  return null;
};

export default UpdateCaseStudyState;
