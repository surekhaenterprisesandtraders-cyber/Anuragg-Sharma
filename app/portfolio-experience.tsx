"use client";

import Image from "next/image";
import {
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

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
    image: "/two-great-masters.webp",
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
    id: "LmhtKr8xoN4",
    label: "Feature film",
    title: "Juni — Official Teaser",
    note: "Official teaser · 2:34",
    className: "reel-featured",
    thumbnail: "sddefault.jpg",
  },
  {
    id: "zvYvlGC2GHw",
    label: "Web series",
    title: "Two Great Masters",
    note: "Series trailer · 5:30",
    className: "",
    thumbnail: "sddefault.jpg",
  },
  {
    id: "U8mrzLBS5es",
    label: "Selected performance",
    title: "Trust In GOD and Do The Right",
    note: "Official video",
    className: "",
    thumbnail: "hqdefault.jpg",
  },
];

const castingFacts = [
  { label: "Playing age", value: "32–33 years" },
  { label: "Height", value: "5′8″ / 173 cm" },
  { label: "Weight", value: "79 kg" },
  { label: "Body type", value: "Average fit" },
  { label: "Hair", value: "Black" },
  { label: "Eyes", value: "Dark brown" },
];

const castingSkills = [
  "Natural acting",
  "Emotional performance",
  "Dialogue delivery",
  "Action & fight",
  "Haryanvi accent",
  "Bike & car driving",
];

const castingLooks = [
  "Intense & rugged",
  "Stylish & modern",
  "Village / Haryanvi",
  "Romantic & emotional",
  "Versatile & adaptable",
];

const galleryFilters = [
  { id: "all", label: "All looks" },
  { id: "headshots", label: "Headshots" },
  { id: "character", label: "Character looks" },
  { id: "on-set", label: "On set" },
  { id: "lifestyle", label: "Lifestyle" },
] as const;

type GalleryFilter = (typeof galleryFilters)[number]["id"];

const gallery = [
  {
    src: "/gallery/night-city.webp",
    fullSrc: "/gallery/night-city.jpg",
    title: "After dark",
    note: "Urban portrait",
    category: "lifestyle",
    layout: "gallery-tall",
    position: "center",
  },
  {
    src: "/gallery/editorial-chair.webp",
    fullSrc: "/gallery/editorial-chair.jpg",
    title: "Quiet authority",
    note: "Editorial portrait",
    category: "headshots",
    layout: "gallery-tall",
    position: "center 24%",
  },
  {
    src: "/gallery/urban-ride.webp",
    fullSrc: "/gallery/urban-ride.jpg",
    title: "City pulse",
    note: "Contemporary character",
    category: "lifestyle",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/road-presence.webp",
    fullSrc: "/gallery/road-presence.webp",
    title: "Road presence",
    note: "Editorial lifestyle",
    category: "lifestyle",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/red-car.webp",
    fullSrc: "/gallery/red-car.jpg",
    title: "Graphic frame",
    note: "On-set portrait",
    category: "on-set",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/lowlight-frame.webp",
    fullSrc: "/gallery/lowlight-frame.jpg",
    title: "Inner light",
    note: "Character study",
    category: "character",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/rooftop-closeup.webp",
    fullSrc: "/gallery/rooftop-closeup.jpg",
    title: "Golden hour",
    note: "Close-up study",
    category: "headshots",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/on-stage.webp",
    fullSrc: "/gallery/on-stage.jpg",
    title: "In the moment",
    note: "Live presence",
    category: "on-set",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/devotional-strength.webp",
    fullSrc: "/gallery/devotional-strength-full.jpeg",
    title: "Devotional strength",
    note: "Documentary portrait",
    category: "character",
    layout: "gallery-tall",
    position: "center 34%",
  },
  {
    src: "/gallery/character-green.webp",
    fullSrc: "/gallery/character-green.jpg",
    title: "Transformation",
    note: "Character look",
    category: "character",
    layout: "gallery-tall",
    position: "center 58%",
  },
  {
    src: "/gallery/studio-smile.webp",
    fullSrc: "/gallery/studio-smile.jpg",
    title: "Warmth",
    note: "Studio portrait",
    category: "headshots",
    layout: "gallery-compact",
    position: "center",
  },
  {
    src: "/gallery/character-portrait.webp",
    fullSrc: "/gallery/character-portrait.jpg",
    title: "Unfiltered",
    note: "Look study",
    category: "headshots",
    layout: "gallery-tall",
    position: "center 20%",
  },
  {
    src: "/gallery/garden-editorial.webp",
    fullSrc: "/gallery/garden-editorial.jpg",
    title: "Off camera",
    note: "Editorial moment",
    category: "lifestyle",
    layout: "gallery-wide",
    position: "center",
  },
  {
    src: "/gallery/action-frame.webp",
    fullSrc: "/gallery/action-frame.jpg",
    title: "Kinetic",
    note: "Performance frame",
    category: "on-set",
    layout: "gallery-wide",
    position: "center",
  },
];

export default function PortfolioExperience() {
  const siteRef = useRef<HTMLDivElement>(null);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("all");
  const [activeVideo, setActiveVideo] = useState<
    (typeof reelVideos)[number] | null
  >(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const visibleGallery = useMemo(
    () =>
      galleryFilter === "all"
        ? gallery
        : gallery.filter((image) => image.category === galleryFilter),
    [galleryFilter],
  );

  const moveGallery = useCallback((direction: -1 | 1) => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current + direction + visibleGallery.length) %
          visibleGallery.length,
    );
  }, [visibleGallery.length]);

  const resetSwipe = () => {
    swipeStartRef.current = null;
    setSwipeOffset(0);
    setIsSwiping(false);
  };

  const onGalleryPointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "mouse") return;
    swipeStartRef.current = { x: event.clientX, y: event.clientY };
    setIsSwiping(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onGalleryPointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const start = swipeStartRef.current;
    if (!start || event.pointerType === "mouse") return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    setSwipeOffset(Math.max(-140, Math.min(140, deltaX)));
  };

  const onGalleryPointerEnd = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const start = swipeStartRef.current;
    if (!start || event.pointerType === "mouse") return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) >= 56 && Math.abs(deltaX) > Math.abs(deltaY)) {
      moveGallery(deltaX < 0 ? 1 : -1);
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetSwipe();
  };

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

    let frameId: number | null = null;
    let scrollMax = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      0,
    );

    const renderScrollState = () => {
      const scrollY = window.scrollY;
      const progress = scrollMax > 0 ? scrollY / scrollMax : 0;
      root.style.setProperty("--scroll-progress", `${progress}`);
      root.style.setProperty(
        "--hero-shift",
        `${Math.min(scrollY * 0.09, 72)}px`,
      );
      header?.classList.toggle("is-scrolled", scrollY > 40);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(renderScrollState);
    };

    const onResize = () => {
      scrollMax = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      onScroll();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!aura || event.pointerType === "touch") return;
      aura.style.opacity = "1";
      aura.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    };

    const onPointerLeave = () => {
      if (aura) aura.style.opacity = "0";
    };

    renderScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      delete document.documentElement.dataset.js;
    };
  }, []);

  useEffect(() => {
    if (activeImage === null && activeVideo === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (activeImage !== null) {
      const adjacentImages = [
        (activeImage - 1 + visibleGallery.length) % visibleGallery.length,
        (activeImage + 1) % visibleGallery.length,
      ];
      adjacentImages.forEach((index) => {
        const image = new window.Image();
        image.src = visibleGallery[index].fullSrc;
      });
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        setActiveVideo(null);
      }
      if (activeImage !== null && event.key === "ArrowRight") {
        moveGallery(1);
      }
      if (activeImage !== null && event.key === "ArrowLeft") {
        moveGallery(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, activeVideo, moveGallery, visibleGallery]);

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
          <a href="#casting">Casting</a>
          <a href="#work">Selected work</a>
          <a href="#gallery">Gallery</a>
          <a href="#credentials">Credentials</a>
        </nav>

        <a className="header-contact" href="/casting-enquiry">
          <i aria-hidden="true" />
          Casting enquiry
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="cinematic-hero" id="top">
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/hero-cinematic.webp"
              alt=""
              fill
              quality={100}
              sizes="100vw"
              priority
              fetchPriority="high"
            />
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
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/${video.thumbnail}`}
                  alt=""
                  fill
                  quality={100}
                  sizes="(max-width: 700px) 100vw, 33vw"
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
                <Image
                  src="/anurag-representation.webp"
                  alt="Anuragg Sharma in a cinematic portrait"
                  width={914}
                  height={1280}
                  quality={100}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
                <span>Portrait / AS–02</span>
              </div>
              <div className="portrait-caption">
                <span>Based in Chandigarh</span>
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

        <section className="casting-profile" id="casting">
          <div className="casting-heading" data-reveal>
            <div>
              <span className="eyebrow">Casting profile / At a glance</span>
              <h2>
                Ready for
                <br />
                the <em>role.</em>
              </h2>
            </div>
            <p>
              A concise casting snapshot for filmmakers, producers, and casting
              teams—covering screen age, physical profile, languages, and
              performance strengths.
            </p>
          </div>

          <div className="casting-layout">
            <div className="casting-visuals" data-reveal>
              <figure className="casting-image casting-image-main">
                <Image
                  src="/casting/anuragg-casting-closeup.webp"
                  alt="Anuragg Sharma casting close-up"
                  width={685}
                  height={790}
                  quality={100}
                  sizes="(max-width: 700px) 78vw, 40vw"
                />
                <figcaption>
                  <span>Current look</span>
                  <b>AS / Casting 01</b>
                </figcaption>
              </figure>
              <figure className="casting-image casting-image-character">
                <Image
                  src="/casting/anuragg-character-portrait.webp"
                  alt="Anuragg Sharma character portrait"
                  width={377}
                  height={607}
                  quality={100}
                  sizes="(max-width: 700px) 46vw, 24vw"
                />
                <figcaption>
                  <span>Character range</span>
                  <b>AS / Casting 02</b>
                </figcaption>
              </figure>
            </div>

            <div className="casting-details">
              <div className="casting-facts">
                {castingFacts.map((fact, index) => (
                  <article
                    key={fact.label}
                    data-reveal
                    style={{ transitionDelay: `${index * 45}ms` }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </div>

              <div className="casting-capabilities" data-reveal>
                <div>
                  <span>Languages</span>
                  <ul>
                    <li>Hindi</li>
                    <li>Haryanvi</li>
                    <li>English</li>
                  </ul>
                </div>
                <div>
                  <span>Performance skills</span>
                  <ul>
                    {castingSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Looks & range</span>
                  <ul>
                    {castingLooks.map((look) => (
                      <li key={look}>{look}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="casting-availability" data-reveal>
                <div>
                  <span>Base</span>
                  <strong>Chandigarh, India</strong>
                  <small>Open to relocate · Pan India</small>
                </div>
                <a href="/casting-enquiry">
                  Check availability <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
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
                    <Image
                      src={project.image}
                      alt={`${project.title} poster`}
                      fill
                      quality={100}
                      sizes="(max-width: 700px) 100vw, 60vw"
                    />
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

          <div className="gallery-filters" aria-label="Filter gallery by look">
            {galleryFilters.map((filter) => {
              const count =
                filter.id === "all"
                  ? gallery.length
                  : gallery.filter((image) => image.category === filter.id)
                      .length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={galleryFilter === filter.id ? "is-active" : ""}
                  aria-pressed={galleryFilter === filter.id}
                  onClick={() => {
                    setGalleryFilter(filter.id);
                    setActiveImage(null);
                  }}
                >
                  <span>{filter.label}</span>
                  <small>{String(count).padStart(2, "0")}</small>
                </button>
              );
            })}
          </div>

          <div className="gallery-grid">
            {visibleGallery.map((image, index) => (
              <button
                className={`gallery-frame gallery-filtered-frame ${image.layout}`}
                key={image.src}
                onClick={() => setActiveImage(index)}
                style={{
                  animationDelay: `${(index % 4) * 55}ms`,
                }}
                aria-label={`Open ${image.title} image`}
              >
                <Image
                  src={image.src}
                  alt={`Anuragg Sharma — ${image.title}`}
                  fill
                  quality={100}
                  sizes="(max-width: 700px) 50vw, 25vw"
                  style={{ objectPosition: image.position }}
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
            <span>
              Showing / {String(visibleGallery.length).padStart(2, "0")} of{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
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
            <Image
              src="/anurag-sharma.jpg"
              alt="Portrait of Anuragg Sharma"
              width={780}
              height={470}
              quality={100}
              sizes="(max-width: 700px) 100vw, 45vw"
            />
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
              href="/casting-enquiry"
            >
              <span>
                Request
                <br />
                availability
              </span>
              <b aria-hidden="true">↗</b>
            </a>
            <div className="contact-socials" aria-label="Anuragg Sharma social profiles">
              <a
                href="https://www.instagram.com/itsanuraggsharma"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/instagram.svg" alt="" aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@AnuraggSharmajuni"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/youtube.svg" alt="" aria-hidden="true" />
                YouTube
              </a>
            </div>
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
          aria-label={`${visibleGallery[activeImage].title} gallery image`}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close gallery"
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <div
            className={`lightbox-image ${isSwiping ? "is-swiping" : ""}`}
            onPointerDown={onGalleryPointerDown}
            onPointerMove={onGalleryPointerMove}
            onPointerUp={onGalleryPointerEnd}
            onPointerCancel={resetSwipe}
            style={
              {
                "--swipe-x": `${swipeOffset}px`,
              } as CSSProperties
            }
          >
            <img
              key={visibleGallery[activeImage].fullSrc}
              src={visibleGallery[activeImage].fullSrc}
              alt={`Anuragg Sharma — ${visibleGallery[activeImage].title}`}
              decoding="async"
              draggable={false}
            />
          </div>
          <div className="lightbox-meta" aria-live="polite">
            <span>
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(visibleGallery.length).padStart(2, "0")}
            </span>
            <div>
              <b>{visibleGallery[activeImage].title}</b>
              <small>{visibleGallery[activeImage].note}</small>
            </div>
          </div>
          <div className="lightbox-swipe-hint" aria-hidden="true">
            <span>←</span>
            Swipe to explore
            <span>→</span>
          </div>
          <div className="lightbox-controls">
            <button
              onClick={() => moveGallery(-1)}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => moveGallery(1)}
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
