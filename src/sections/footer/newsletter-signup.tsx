import React from "react";
import styles from "./newsletter.module.scss";
import { FormSubmitButton } from "./form-submit-button";

export const NewsLetterSignupForm = () => {
  async function handleFormSubmit(formData: FormData) {
    "use server";
    //TODO: Implement form submission
    console.log(formData);
  }

  return (
    <div className={styles.newsLetter}>
      <p>Keep up to date with our newsletter</p>
      <form action={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email input for newsletter"
        />
        <button type="submit">
          <FormSubmitButton />
        </button>
      </form>
      <p>By submitting this form, you are agreeing to our Privacy Policy</p>
    </div>
  );
};
