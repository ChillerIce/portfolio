// ./components/Footer.js
import styles from "./Footer.module.css";

// Edit these. Remove any you don't use.
const email = "limyancheng8@gmail.com";
const socials = [
  { label: "GitHub", href: "https://github.com/ChillerIce" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lim-yan-cheng-330509369" },
  { label: "itch.io", href: "https://ColderIce.itch.io" },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.text}>
            Open to internships, collaborations and game jams.
          </p>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <ul className={styles.socials}>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Lim Yan Cheng</p>
    </footer>
  );
}