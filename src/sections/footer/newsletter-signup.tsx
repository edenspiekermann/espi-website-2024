"use client";

import React, { useState } from "react";
import styles from "./newsletter.module.scss";
import { FormSubmitButton } from "./form-submit-button";
import { validateEmail } from "@/utils/validate-email";

export const NewsLetterSignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //TODO: Implement form submission
    if (!validateEmail(email)) {
      setMessage("Invalid email address");
      return;
    }
    const formData = new FormData(event.currentTarget);
    console.log("Form submitted", formData);
    setMessage("");
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className={styles.newsLetter}>
      <p>Keep up to date with our newsletter</p>
      {submitted ? (
        <p className={styles.message}>Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleFormSubmit} noValidate>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email input for newsletter"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage(""); // Reset message on input change
            }}
          />
          <button type="submit">
            <FormSubmitButton />
          </button>
        </form>
      )}
      {message && <p className={styles.message}>{message}</p>}
      <p>By submitting this form, you are agreeing to our Privacy Policy</p>
    </div>
  );
};
