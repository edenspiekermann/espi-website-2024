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
  const [consent, setConsent] = useState<CookieConsentState>(
    loadConsentFromLocalStorage,
  );
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    saveConsentToLocalStorage(consent);
  }, [consent]);

  const updateConsent = (updatedConsent: Partial<CookieConsentState>) => {
    setConsent((prevConsent) => {
      const newConsent = { ...prevConsent };
      for (const key in updatedConsent) {
        if (updatedConsent[key] !== undefined) {
          newConsent[key] = updatedConsent[key]!;
        }
      }
      return newConsent;
    });
  };

  const allowAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      contents: true,
    });
    setIsFormVisible(false);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, updateConsent, allowAll, isFormVisible, hideForm }}
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
