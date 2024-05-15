import styles from "./styles.module.scss";

export const SectionDevelopment = ({ __typename }: { __typename: string }) => {
  return (
    <section className={styles.development}>
      <div className={styles.development__message}>
        🛠 🛠 Component mapping under development for {__typename} 🛠 🛠
      </div>
    </section>
  );
};
