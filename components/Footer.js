import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer shell" id="contact">
      <div className="footer-intro">
        <p className="eyebrow"><span /> Your next drive starts here</p>
        <h2>Keep it<br /><em>redline.</em></h2>
        <p className="footer-note">Reliable service, sharper performance, and honest advice for every journey through Abuja.</p>
      </div>

      <div className="contact-details">
        <a href="tel:07047458909"><small>Call / WhatsApp</small><strong>0704 745 8909</strong></a>
        <a href="mailto:sparksredline@gmail.com"><small>Email</small><strong>sparksredline@gmail.com</strong></a>
        <p><small>Find the garage</small><strong>Shema Filling Station<br />before NAF Valley Estate, Abuja</strong></p>
      </div>

      <div className="footer-links">
        <div>
          <small>Explore</small>
          <Link href="/">Home</Link>
          <Link href="/auth/about">About us</Link>
          <Link href="/auth/services">Our services</Link>
          <Link href="/auth/contact">Contact</Link>
        </div>
        <div>
          <small>Workshop hours</small>
          <p>Mon - Sat<br /><strong>8:00 AM - 6:00 PM</strong></p>
          <p>Sunday<br /><strong>By appointment</strong></p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Spark&apos;s Redline Performance</span>
        <span>Precision · Power · Accuracy</span>
      </div>
    </footer>
  );
}
