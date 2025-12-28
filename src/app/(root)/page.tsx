import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["main-page-layout"]}>
      <ContactForm />
    </div>
  );
}
