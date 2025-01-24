"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Router from "next/router";

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
  setIsFormVisible: (isFormVisible: boolean) => void;
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

const loadConsentFromLocalStorage = (): {
  consent: CookieConsentState;
  submitted: boolean;
} => {
  if (typeof window !== "undefined") {
    const storedConsent = localStorage.getItem("cookieConsent");
    const storedSubmitted = localStorage.getItem("cookieConsentSubmitted");
    if (storedConsent) {
      return {
        consent: JSON.parse(storedConsent),
        submitted: storedSubmitted === "true",
      };
    }
  }
  return { consent: defaultConsent, submitted: false };
};

const saveConsentToLocalStorage = (
  consent: CookieConsentState,
  submitted: boolean,
) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    localStorage.setItem("cookieConsentSubmitted", submitted.toString());
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const { consent: storedConsent, submitted: storedSubmitted } =
      loadConsentFromLocalStorage();
    setConsent(storedConsent);
    setSubmitted(storedSubmitted);
    setIsFormVisible(!storedConsent.necessary && !storedSubmitted);
    setIsLoaded(true);

    const handleRouteChange = () => {
      const { consent: updatedConsent, submitted: updatedSubmitted } =
        loadConsentFromLocalStorage();
      setConsent(updatedConsent);
      setSubmitted(updatedSubmitted);
      setIsFormVisible(!updatedConsent.necessary && !updatedSubmitted);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveConsentToLocalStorage(consent, submitted);
    }
  }, [consent, submitted, isLoaded]);

  const updateConsent = (updatedConsent: CookieConsentState) => {
    setConsent((prevConsent) => {
      const newConsent: CookieConsentState = {
        ...prevConsent,
        ...updatedConsent,
      };
      saveConsentToLocalStorage(newConsent, submitted);
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
    setSubmitted(true);
    setIsFormVisible(false);
    saveConsentToLocalStorage(newConsent, true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        updateConsent: (updatedConsent: Partial<CookieConsentState>) =>
          updateConsent(updatedConsent as CookieConsentState),
        allowAll,
        isFormVisible: isLoaded && isFormVisible,
        hideForm,
        submitted,
        setIsFormVisible,
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
