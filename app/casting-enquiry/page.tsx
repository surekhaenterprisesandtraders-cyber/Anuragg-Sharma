import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../site-config";
import styles from "./enquiry.module.css";

export const metadata: Metadata = {
  title: "Casting Enquiry",
  description:
    "Submit a casting, film, OTT, television, commercial, or international production enquiry for Indian actor Anuragg Sharma.",
  alternates: {
    canonical: "/casting-enquiry",
  },
  openGraph: {
    title: "Casting Enquiry — Anuragg Sharma",
    description:
      "Share your production details and check Anuragg Sharma’s availability.",
    url: "/casting-enquiry",
  },
};

const enquiryTypes = [
  "Feature film",
  "OTT / Web series",
  "Television",
  "Commercial / Brand film",
  "Music video",
  "International production",
  "Other",
];

export default function CastingEnquiryPage() {
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

      <section className={styles.content}>
        <aside className={styles.intro}>
          <span className={styles.eyebrow}>Casting desk / Direct enquiry</span>
          <h1>
            Let’s discuss
            <br />
            the <em>role.</em>
          </h1>
          <p>
            Share the project brief, tentative schedule, and production details.
            The enquiry will be reviewed and answered directly.
          </p>

          <div className={styles.steps} aria-label="What happens next">
            <div>
              <span>01</span>
              <p>Submit the production brief</p>
            </div>
            <div>
              <span>02</span>
              <p>Availability is reviewed</p>
            </div>
            <div>
              <span>03</span>
              <p>The team replies directly</p>
            </div>
          </div>

          <div className={styles.direct}>
            <span>Prefer direct contact?</span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone}`}>+91 98789 84849</a>
          </div>
        </aside>

        <form
          className={styles.form}
          action={`https://formsubmit.co/${siteConfig.email}`}
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New casting enquiry — Anuragg Sharma"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting Anuragg Sharma’s team. We have received your casting enquiry and will review the project details. A member of the team will respond using the contact information you provided. Regards, Anuragg Sharma — Casting Desk."
          />
          <input
            type="hidden"
            name="_next"
            value={`${siteConfig.url}/enquiry-success`}
          />
          <input
            className={styles.honey}
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className={styles.formHeading}>
            <span>Enquiry details</span>
            <b>All fields marked * are required</b>
          </div>

          <div className={styles.twoColumns}>
            <label>
              <span>Full name *</span>
              <input
                type="text"
                name="Full name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Production house / Company</span>
              <input
                type="text"
                name="Production house"
                autoComplete="organization"
                placeholder="Company name"
              />
            </label>
          </div>

          <div className={styles.twoColumns}>
            <label>
              <span>Work email *</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
              />
            </label>
            <label>
              <span>Phone / WhatsApp *</span>
              <input
                type="tel"
                name="Phone / WhatsApp"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91"
                required
              />
            </label>
          </div>

          <div className={styles.twoColumns}>
            <label>
              <span>Enquiry type *</span>
              <select name="Enquiry type" defaultValue="" required>
                <option value="" disabled>
                  Select project type
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Project title</span>
              <input
                type="text"
                name="Project title"
                placeholder="Working title"
              />
            </label>
          </div>

          <div className={styles.twoColumns}>
            <label>
              <span>Shoot location</span>
              <input
                type="text"
                name="Shoot location"
                placeholder="City / Country"
              />
            </label>
            <div className={styles.dateGroup}>
              <span>Tentative shoot dates</span>
              <div>
                <label>
                  <span className={styles.srOnly}>Start date</span>
                  <input type="date" name="Tentative start date" />
                </label>
                <i aria-hidden="true">—</i>
                <label>
                  <span className={styles.srOnly}>End date</span>
                  <input type="date" name="Tentative end date" />
                </label>
              </div>
            </div>
          </div>

          <label>
            <span>Role and project brief *</span>
            <textarea
              name="Role and project brief"
              rows={6}
              placeholder="Tell us about the role, format, director, schedule, and any other relevant details."
              required
            />
          </label>

          <label className={styles.consent}>
            <input type="checkbox" name="Consent to contact" value="Yes" required />
            <span>
              I confirm these details are accurate and agree to be contacted
              regarding this enquiry.
            </span>
          </label>

          <button className={styles.submit} type="submit">
            <span>Submit casting enquiry</span>
            <b aria-hidden="true">↗</b>
          </button>

          <p className={styles.note}>
            Your information is used only to respond to this casting enquiry.
          </p>
        </form>
      </section>
    </main>
  );
}
