import type { Metadata } from "next";
import Link from "next/link";
import styles from "../casting-enquiry/enquiry.module.css";

export const metadata: Metadata = {
  title: "Enquiry Received",
  description: "Your casting enquiry for Anuragg Sharma has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnquirySuccessPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <header className={styles.header}>
        <Link className={styles.identity} href="/" aria-label="Back to portfolio">
          <span className={styles.mark}>AS</span>
          <span>
            <b>Anuragg Sharma</b>
            <small>Indian actor</small>
          </span>
        </Link>
        <Link className={styles.back} href="/">
          Back to portfolio <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className={styles.success}>
        <span className={styles.successMark} aria-hidden="true">
          ✓
        </span>
        <h1>
          Enquiry
          <br />
          <em>received.</em>
        </h1>
        <p>
          Thank you for sharing the production details. The casting enquiry has
          been sent to Anuragg Sharma’s team for review.
        </p>
        <div className={styles.successActions}>
          <Link href="/">Return to portfolio</Link>
          <Link href="/casting-enquiry">Send another enquiry</Link>
        </div>
      </section>
    </main>
  );
}
