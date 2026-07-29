"use client";

import { useEffect, useRef, useState } from "react";

const formats = [
  "Feature films",
  "OTT originals",
  "Web series",
  "Television",
  "Commercials",
  "Music videos",
  "International productions",
];

const credentials = [
  { number: "200+", label: "Screen projects", note: "Across formats and genres" },
  { number: "M.Tech.", label: "Education", note: "Engineer by training" },
  { number: "03", label: "Associations", note: "CINTAA · IMPPA · SWA" },
  { number: "Global", label: "Audience reach", note: "India and international markets" },
];

const projects = [
  {
    number: "01",
    type: "Feature film · Performance",
    title: "Juni",
    subtitle: "The Last Player",
    description:
      "A defining feature-film performance shaped by emotional detail, restraint, and a strong sense of cinematic presence.",
    className: "project-juni",
  },
  {
    number: "02",
    type: "Web series · Featured performance",
    title: "Two Great Masters",
    subtitle: "A spiritual screen journey",
    description:
      "A contemporary series inspired by the enduring philosophies of Swami Vivekananda and Paramahansa Yogananda.",
    className: "project-masters",
    image: "/two-great-masters.png",
  },
  {
    number: "03",
    type: "Upcoming feature film",
    title: "Uddand",
    subtitle: "Coming next",
    description:
      "The next chapter in Anuragg’s feature-film journey—driven by intensity, transformation, and screen impact.",
    className: "project-uddand",
  },
];

const reelVideos = [
  {
    id: "W15zx06BL2Q",
    label: "Featured trailer",
    title: "Just 7 Days",
    note: "Official trailer · 2:07",
    className: "reel-featured",
  },
  {
    id: "LmhtKr8xoN4",
    label: "Feature film",
    title: "Juni — Official Teaser",
    note: "Official teaser · 2:34",
    className: "",
  },
  {
    id: "zvYvlGC2GHw",
    label: "Web series",
    title: "Two Great Masters",
    note: "Series trailer · 5:30",
    className: "",
  },
];

const gallery = [
  {
    src: "/gallery/night-city.jpg",
    title: "After dark",
    note: "Urban portrait",
    layout: "gallery-tall",
    position: "center",
  },
  {
    src: "/gallery/editorial-chair.jpg",
    title: "Quiet authority",
    note: "Editorial portrait",
    layout: "gallery-tall",
    position: "center 24%",
  },
  {
    src: "/gallery/urban-ride.jpg",
    title: "City pulse",
    note: "Contemporary character",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/red-car.jpg",
    title: "Graphic frame",
    note: "On-set portrait",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/lowlight-frame.jpg",
    title: "Inner light",
    note: "Character study",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/rooftop-closeup.jpg",
    title: "Golden hour",
    note: "Close-up study",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/on-stage.jpg",
    title: "In the moment",
    note: "Live presence",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/character-green.jpg",
    title: "Transformation",
    note: "Character look",
    layout: "gallery-tall",
    position: "center 58%",
  },
  {
    src: "/gallery/studio-smile.jpg",
    title: "Warmth",
    note: "Studio portrait",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/character-portrait.jpg",
    title: "Unfiltered",
    note: "Look study",
    layout: "gallery-tall",
    position: "center 20%",
  },
  {
    src: "/gallery/garden-editorial.jpg",
    title: "Off camera",
    note: "Editorial moment",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/action-frame.jpg",
    title: "Kinetic",
    note: "Performance frame",
    layout: "gallery-wide",
    position: "center",
  },
];

export default function PortfolioExperience() {
  const siteRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<
    (typeof reelVideos)[number] | null
  >(null);

  useEffect(() => {
    const root = siteRef.current;
    if (!root) return;

    document.documentElement.dataset.js = "true";

    const reveals = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    reveals.forEach((element) => observer.observe(element));

    const header = root.querySelector<HTMLElement>(".site-header");
    const aura = root.querySelector<HTMLElement>(".cursor-aura");

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll-progress", `${progress}`);
      root.style.setProperty(
        "--hero-shift",
        `${Math.min(window.scrollY * 0.09, 72)}px`,
      );
      header?.classList.toggle("is-scrolled", window.scrollY > 40);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!aura || event.pointerType === "touch") return;
      aura.style.opacity = "1";
      aura.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    };

    const onPointerLeave = () => {
      if (aura) aura.style.opacity = "0";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      delete document.documentElement.dataset.js;
    };
  }, []);

  useEffect(() => {
    if (activeImage === null && activeVideo === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        setActiveVideo(null);
      }
      if (activeImage !== null && event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === null ? null : (current + 1) % gallery.length,
        );
      }
      if (activeImage !== null && event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === null
            ? null
            : (current - 1 + gallery.length) % gallery.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, activeVideo]);

  return (
    <div className="site-shell" ref={siteRef}>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <div className="cursor-aura" aria-hidden="true" />

      <header className="site-header">
        <a className="identity" href="#top" aria-label="Anuragg Sharma — home">
          <span className="identity-mark">AS</span>
          <span>
            <b>Anuragg Sharma</b>
            <small>Indian actor</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#showreel">Showreel</a>
          <a href="#profile">Profile</a>
          <a href="#work">Selected work</a>
          <a href="#gallery">Gallery</a>
          <a href="#credentials">Credentials</a>
        </nav>

        <a className="header-contact" href="#contact">
          <i aria-hidden="true" />
          Casting enquiry
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="cinematic-hero" id="top">
          <div className="hero-image" aria-hidden="true">
            <img src="/hero-cinematic.png" alt="" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <div className="hero-edition">
            <span>Portfolio / 2026</span>
            <span>Haryana · India</span>
          </div>

          <div className="hero-mobile-title">
            <p>Indian actor</p>
            <h1>
              Anuragg
              <br />
              <em>Sharma</em>
            </h1>
            <span>Every frame. Fully lived.</span>
          </div>

          <div className="hero-console">
            <div className="availability">
              <i aria-hidden="true" />
              <span>
                Available for select
                <br />
                productions
              </span>
            </div>
            <div className="hero-credit">
              <span>Actor profile</span>
              <p>Feature films · OTT · Television · Commercials</p>
            </div>
            <a href="#showreel">
              Watch the work
              <b aria-hidden="true">▶</b>
            </a>
          </div>

          <div className="frame-corners" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </section>

        <section className="showreel-section" id="showreel">
          <div className="showreel-heading" data-reveal>
            <div>
              <span className="eyebrow">Official channel / Selected screen work</span>
              <h2>
                Watch the
                <br />
                <em>work.</em>
              </h2>
            </div>
            <div className="showreel-intro">
              <span>Performance first</span>
              <p>
                A curated selection of official trailers and teasers—chosen to
                show range, presence, and character on screen.
              </p>
              <a
                href="https://www.youtube.com/@AnuraggSharmajuni/featured"
                target="_blank"
                rel="noreferrer"
              >
                Visit official YouTube channel <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="reel-grid" data-reveal>
            {reelVideos.map((video, index) => (
              <button
                className={`reel-card ${video.className}`}
                key={video.id}
                onClick={() => setActiveVideo(video)}
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="reel-card-shade" aria-hidden="true" />
                <span className="reel-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="reel-play" aria-hidden="true">
                  ▶
                </span>
                <span className="reel-card-copy">
                  <small>{video.label}</small>
                  <b>{video.title}</b>
                  <i>{video.note}</i>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="statement" aria-label="Actor statement">
          <div className="running-line" aria-hidden="true">
            <div>
              {[...formats, ...formats].map((format, index) => (
                <span key={`${format}-${index}`}>
                  {format} <b>✦</b>
                </span>
              ))}
            </div>
          </div>
          <div className="statement-inner" data-reveal>
            <span className="section-code">001 / Manifesto</span>
            <p>
              The camera remembers <em>truth.</em>
            </p>
            <span className="statement-note">
              Presence · Precision · Emotional depth
            </span>
          </div>
        </section>

        <section className="actor-dossier" id="profile">
          <aside className="section-rail" aria-hidden="true">
            <span>Profile</span>
            <i />
            <b>01</b>
          </aside>

          <div className="dossier-intro" data-reveal>
            <div>
              <span className="eyebrow">The actor / The journey</span>
              <h2>
                Built for
                <br />
                the <em>close-up.</em>
              </h2>
            </div>
            <p>
              Anuragg Sharma is an Indian actor known for performances that
              combine emotional precision, lived-in detail, and a commanding
              screen presence.
            </p>
          </div>

          <div className="dossier-grid">
            <div className="dossier-portrait" data-reveal>
              <div className="portrait-frame">
                <img
                  src="/anurag-representation.jpg"
                  alt="Anuragg Sharma in a cinematic portrait"
                />
                <span>Portrait / AS–02</span>
              </div>
              <div className="portrait-caption">
                <span>Based in India</span>
                <span>Open to international productions</span>
              </div>
            </div>

            <div className="dossier-copy" data-reveal>
              <p className="lead-copy">
                Born in Haryana and educated as an engineer, he left the
                conventional path behind to pursue a lifelong instinct for acting
                and cinema.
              </p>
              <div className="copy-columns">
                <p>
                  More than 200 projects have shaped an adaptable performer
                  comfortable across feature films, digital productions,
                  television, commercials, and music videos.
                </p>
                <p>
                  His process is grounded in preparation, professionalism, and
                  the belief that even the quietest moment can carry a story.
                </p>
              </div>
              <div className="actor-principle">
                <span>Engineer by education</span>
                <i />
                <span>Actor by instinct</span>
              </div>
            </div>
          </div>

          <div className="credentials-snapshot">
            {credentials.map((item, index) => (
              <article
                key={item.label}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.number}</strong>
                <h3>{item.label}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="selected-work" id="work">
          <div className="work-heading" data-reveal>
            <div>
              <span className="eyebrow">Selected screen work</span>
              <h2>
                Performances
                <br />
                with <em>residue.</em>
              </h2>
            </div>
            <p>
              A focused selection from a body of work spanning cinema,
              streaming, television, advertising, and music.
            </p>
          </div>

          <div className="project-stack">
            {projects.map((project) => (
              <article
                className={`project-panel ${project.className}`}
                key={project.title}
                data-reveal
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <p>{project.type}</p>
                </div>
                <div className="project-art">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} poster`} />
                  ) : (
                    <div className="project-lettering" aria-hidden="true">
                      <small>Anuragg Sharma in</small>
                      <strong>{project.title}</strong>
                      <span>{project.subtitle}</span>
                    </div>
                  )}
                  <div className="project-scan" aria-hidden="true" />
                  <span className="project-format">Scope / 2.39:1</span>
                </div>
                <div className="project-info">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-heading" data-reveal>
            <div>
              <span className="eyebrow">Portraits · Characters · On set</span>
              <h2>
                Many faces.
                <br />
                One <em>instinct.</em>
              </h2>
            </div>
            <div>
              <span className="section-code">003 / Visual archive</span>
              <p>
                A curated collection of character studies, editorial portraits,
                and moments from in front of the camera.
              </p>
            </div>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <button
                className={`gallery-frame ${image.layout}`}
                key={image.src}
                onClick={() => setActiveImage(index)}
                data-reveal
                style={{ transitionDelay: `${(index % 4) * 55}ms` }}
                aria-label={`Open ${image.title} image`}
              >
                <img
                  src={image.src}
                  alt={`Anuragg Sharma — ${image.title}`}
                  style={{ objectPosition: image.position }}
                  loading="lazy"
                />
                <span className="gallery-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="gallery-caption">
                  <b>{image.title}</b>
                  <small>{image.note}</small>
                </span>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>

          <div className="gallery-footer" data-reveal>
            <span>Click any frame to explore</span>
            <p>
              Character is not a costume.
              <br />
              It is a point of view.
            </p>
            <span>Archive / 01—12</span>
          </div>
        </section>

        <section className="range-section" aria-label="Performance formats">
          <div className="range-heading" data-reveal>
            <span className="section-code">004 / Range</span>
            <h2>
              One actor.
              <br />
              <em>Many worlds.</em>
            </h2>
          </div>
          <div className="range-grid">
            {formats.map((format, index) => (
              <div
                key={format}
                data-reveal
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{format}</p>
                <b aria-hidden="true">↗</b>
              </div>
            ))}
          </div>
        </section>

        <section className="professional" id="credentials">
          <div className="professional-image" data-reveal>
            <img src="/anurag-sharma.jpg" alt="Portrait of Anuragg Sharma" />
            <div>
              <span>Cinematic presence</span>
              <span>Professional discipline</span>
            </div>
          </div>
          <div className="professional-copy" data-reveal>
            <span className="eyebrow">Professional standing</span>
            <h2>
              Trusted
              <br />
              <em>on set.</em>
            </h2>
            <p>
              Anuragg has collaborated with filmmakers, production houses,
              government organisations, and broadcast networks—earning a
              reputation for adaptability, preparation, and commitment to every
              role.
            </p>
            <div className="affiliations">
              <div>
                <span>CINTAA</span>
                <p>Cine &amp; TV Artistes’ Association</p>
              </div>
              <div>
                <span>IMPPA</span>
                <p>Indian Motion Picture Producers’ Association</p>
              </div>
              <div>
                <span>SWA</span>
                <p>Screenwriters Association</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-stage" id="contact">
          <div className="contact-orbit" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="contact-content" data-reveal>
            <span className="eyebrow">Casting · Features · OTT · International</span>
            <h2>
              Let’s create a
              <br />
              character they
              <br />
              <em>remember.</em>
            </h2>
            <a
              className="contact-disc"
              href="mailto:anushvats@gmail.com?subject=Casting%20enquiry%20for%20Anuragg%20Sharma"
            >
              <span>
                Request
                <br />
                availability
              </span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <a href="mailto:anushvats@gmail.com">anushvats@gmail.com</a>
            </div>
            <div>
              <span>Mobile</span>
              <a href="tel:+919878984849">+91 98789 84849</a>
            </div>
            <div>
              <span>Availability</span>
              <p>India · International</p>
            </div>
          </div>
        </section>
      </main>

      {activeImage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery[activeImage].title} gallery image`}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close gallery"
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="lightbox-image">
            <img
              src={gallery[activeImage].src}
              alt={`Anuragg Sharma — ${gallery[activeImage].title}`}
            />
          </div>
          <div className="lightbox-meta">
            <span>
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
            <div>
              <b>{gallery[activeImage].title}</b>
              <small>{gallery[activeImage].note}</small>
            </div>
          </div>
          <div className="lightbox-controls">
            <button
              onClick={() =>
                setActiveImage(
                  (activeImage - 1 + gallery.length) % gallery.length,
                )
              }
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => setActiveImage((activeImage + 1) % gallery.length)}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      )}

      {activeVideo !== null && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.title} video player`}
        >
          <button
            className="video-modal-close"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="video-modal-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-modal-meta">
            <span>{activeVideo.label}</span>
            <b>{activeVideo.title}</b>
          </div>
        </div>
      )}

      <footer>
        <a className="identity identity-dark" href="#top">
          <span className="identity-mark">AS</span>
          <span>
            <b>Anuragg Sharma</b>
            <small>Indian actor</small>
          </span>
        </a>
        <p>Every frame. Fully lived.</p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
