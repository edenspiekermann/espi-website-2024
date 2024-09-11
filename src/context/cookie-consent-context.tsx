"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface CookieConsentState {
  [key: string]: boolean;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  contents: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsentState;
  updateConsent: (consent: Partial<CookieConsentState>) => void;
  allowAll: () => void;
  isFormVisible: boolean;
  hideForm: () => void;
  submitted: boolean;
}

const defaultConsent: CookieConsentState = {
  necessary: false,
  analytics: false,
  marketing: false,
  contents: false,
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

const loadConsentFromLocalStorage = (): CookieConsentState => {
  if (typeof window !== "undefined") {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (storedConsent) {
      return JSON.parse(storedConsent);
    }
  }
  return defaultConsent;
};

const saveConsentToLocalStorage = (consent: CookieConsentState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
  }
};

export const CookieConsentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [consent, setConsent] = useState<CookieConsentState>(defaultConsent);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedConsent = loadConsentFromLocalStorage();
    setConsent(storedConsent);
    setIsFormVisible(!storedConsent.necessary && !submitted); // Show form if necessary cookies are not accepted
  }, [submitted]);

  useEffect(() => {
    saveConsentToLocalStorage(consent);
  }, [consent]);
  const updateConsent = (updatedConsent: Partial<CookieConsentState>) => {
    setConsent((prevConsent) => {
      const newConsent: CookieConsentState = {
        ...prevConsent,
        ...updatedConsent,
        necessary: prevConsent.necessary || updatedConsent.necessary || false,
        analytics: prevConsent.analytics || updatedConsent.analytics || false,
        marketing: prevConsent.marketing || updatedConsent.marketing || false,
        contents: prevConsent.contents || updatedConsent.contents || false,
      };
      saveConsentToLocalStorage(newConsent);
      return newConsent;
    });
  };

  const allowAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      contents: true,
    };
    setConsent(newConsent);
    saveConsentToLocalStorage(newConsent);
    setSubmitted(true);
    setIsFormVisible(false);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        updateConsent,
        allowAll,
        isFormVisible,
        hideForm,
        submitted,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return context;
};
