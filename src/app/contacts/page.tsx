import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["contact-page"]}>
      <div className={styles["contact-page-info"]}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feel free to reach out to us using the form
          below.
        </p>
      </div>
      <div className={styles["contact-page-form-wrapper"]}>
        <ContactForm />
      </div>
    </div>
  );
}
