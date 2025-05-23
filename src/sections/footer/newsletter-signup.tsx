"use client";

import React, { useState } from "react";
import styles from "./newsletter.module.scss";
import { FormSubmitButton } from "./form-submit-button";
import { validateEmail } from "@/utils/validate-email";
import Link from "next/link";

export const NewsLetterSignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        body: JSON.stringify({ email }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        const errorText = JSON.parse(error.error.response.text);
        if (errorText.title === "Member Exists") {
          setMessage("This email address is already registered.");
        } else {
          setMessage("There was an error. Please try again.");
        }
        return;
      }

      const { data } = await response.json();

      if (data && data.status === "subscribed") {
        setSubmitted(true);
      } else {
        const errorText = await response.text();
        const errorData = JSON.parse(errorText);
        setMessage(errorData.detail);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage("There was an error. Please try again.");
    }
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
      <p>
        By submitting this form, you are agreeing to our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
};
