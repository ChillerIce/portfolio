// ./pages/Home.js
import { useRef } from "react";
import styles from "./css/Home.module.css";
import projects from "../data/projects";

export default function Home() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.offsetWidth + 24 : 320; // 24 = gap in CSS
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.name}>
            <p>Hi I'm</p>
            <h1>Yan Cheng</h1>
        </div>
        
        <p className={styles.tagline}>
          Game developer and student. I build small games and tools.
        </p>
        <div className={styles.heroLinks}>
          <a href="#work">See my work</a>
          <a href="/Your_Resume.pdf">Download resume</a>
          <a href="mailto:you@example.com">Email me</a>
        </div>
      </section>

      <section id="work" className={styles.work} aria-labelledby="work-heading">
        <div className={styles.workHeader}>
          <h2 id="work-heading">Selected work</h2>
          <div className={styles.controls}>
            <button onClick={() => scrollByCard(-1)} aria-label="Previous project">
              ‹
            </button>
            <button onClick={() => scrollByCard(1)} aria-label="Next project">
              ›
            </button>
          </div>
        </div>

        <ul className={styles.track} ref={trackRef}>
          {projects.map((p) => (
            <li key={p.title} className={styles.card}>
              <a href={p.link} className={styles.cardLink}>
                <div
                  className={styles.thumb}
                  style={{ background: p.color }}
                >
                  {p.image && <img src={p.image} alt={`${p.title} screenshot`} />}
                </div>
                <div className={styles.cardBody}>
                  <h3>{p.title}</h3>
                  <p className={styles.meta}>
                    {p.type}, {p.year}
                  </p>
                  <p>{p.description}</p>
                  <p className={styles.tools}>{p.tools.join(", ")}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.about} aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <p>
          I study Immersive Media and Game Development in Temasek Polytechnic. <br></br>
          I enjoy creating and designing games with all its mechanics and art.
        </p>
      </section>
    </main>
  );
}