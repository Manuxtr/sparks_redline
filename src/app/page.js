import Image from "next/image";
import { Build, DirectionsCar, Engineering, Speed } from "@mui/icons-material";

const services = [
  ["01", "Deep diagnostics", "Find the real fault before it becomes an expensive one.", Engineering],
  ["02", "Performance tuning", "Sharper response, smarter power, and a drive that feels alive.", Speed],
  ["03", "Engine & transmission", "Precision repairs for the systems that move everything forward.", Build],
  ["04", "Suspension & exhaust", "Better control, better sound, and confidence through every corner.", DirectionsCar],
];

const youtubeVideos = [
  { id: "W4N4HKeOv2I", title: "2013 Chevrolet Spark review", label: "Workshop feature" },
  { id: "W4N4HKeOv2I", title: "What your warning light means", label: "Driver guide" },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Abuja&apos;s performance garage</p>
          <h1>Make every<br /><em>drive count.</em></h1>
          <p className="hero-intro">Precision maintenance, honest diagnostics, and performance work for drivers who expect more from their cars.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/auth/services" target="_blank" rel="noreferrer">Book a service </a>
            <a className="text-link" href="#services">See what we do </a>
          </div>
          <div className="hero-meta">
            <div><strong>01</strong><span>Performance-led<br />technical care</span></div>
            <div><strong>02</strong><span>Clear answers<br />before any work</span></div>
          </div>
        </div>
        <div className="hero-art">
          <Image src="/rdbg.jpeg" alt="Spark's Redline Performance garage and sports car" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
          <div className="art-label"><span>01</span> / Redline<br />standard</div>
        </div>
      </section>

      <section className="trust-bar" id="standard">
        <div className="shell trust-grid">
          <p className="trust-lead">Why drivers<br /><strong>come back</strong></p>
          <div><span className="trust-icon">01</span><p><b>Precision</b><br />Every diagnosis is earned.</p></div>
          <div><span className="trust-icon">02</span><p><b>Performance</b><br />Built for how you drive.</p></div>
          <div><span className="trust-icon">03</span><p><b>Honesty</b><br />Clear work. Clear pricing.</p></div>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="section-heading">
          <p className="eyebrow"><span /> The work</p>
          <h2>More from<br /><em>your car.</em></h2>
          <p>From routine maintenance to serious performance work, we find what is holding your car back and get it moving right.</p>
          <a className="text-link" href="/auth/services">View all services <span>↗</span></a>
        </div>
        <div className="service-list">
          {services.map(([number, title, description, Icon]) => (
            <article className="service-item" key={title}>
              <span className="service-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <Icon className="service-icon" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="video-section shell" id="videos">
        <div className="video-heading">
          <div>
            <p className="eyebrow"><span /> From the garage</p>
            <h2>Watch the<br /><em>redline.</em></h2>
          </div>
          <p>Practical car advice, workshop stories, and a closer look at how we keep Abuja moving.</p>
        </div>
        <div className="video-grid">
          {youtubeVideos.map((video) => (
            <article className="video-card" key={video.title}>
              {video.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">
                  <span>YT</span>
                  <p>Add a YouTube video ID here</p>
                </div>
              )}
              <div className="video-card-meta">
                <span>{video.label}</span>
                <h3>{video.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="offer shell" id="booking">
        <div className="offer-image"><Image src="/rdflyer.jpeg" alt="Spark's Redline service and diagnostic offering" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="offer-copy">
          <p className="eyebrow"><span /> Start with certainty</p>
          <h2>Know what&apos;s<br /><em>under the hood.</em></h2>
          <p>Small service, big peace of mind. We scan, inspect, and explain what your car needs next, before a warning light becomes a roadside story.</p>
          <a className="button button-light" href="/auth/services" target="_blank" rel="noreferrer">Talk to the team</a>
        </div>
      </section>

    </main>
  );
}
