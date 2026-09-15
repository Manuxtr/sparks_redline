
import Image from "next/image";
import { ArrowForward, Build, Speed, Verified } from "@mui/icons-material";
import Link from "next/link";

const principles = [
    ["01", "Diagnose properly", "We look for the real cause, not the quickest guess. You get clear answers before work begins.", Build],
    ["02", "Build for the road", "Every repair and upgrade is considered against how you actually drive in Abuja and beyond.", Speed],
    ["03", "Stand behind the work", "Good service means honest communication, careful workmanship, and a car you can trust again.", Verified],
];

export default function About() {
    return (
        <main className="about-page">
            <section className="about-hero shell">
                <div className="about-hero-copy">
                    <p className="eyebrow"><span /> About Spark&apos;s Redline</p>
                    <h1>Care for the<br /><em>way you drive.</em></h1>
                    <p className="about-lede">Spark&apos;s Redline is an Abuja performance garage for drivers who want thoughtful maintenance, accurate diagnostics, and more from every mile.</p>
                    <Link className="button button-primary" href="/auth/services">Book a service <span>↗</span></Link>
                </div>
                <div className="about-hero-image">
                    <Image src="/rdbg.jpeg" alt="A performance car at Spark's Redline garage" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
                    <span>Precision<br /><em>in motion</em></span>
                </div>
            </section>

            <section className="about-story shell">
                <div>
                    <p className="eyebrow"><span /> Our standard</p>
                    <h2>Not just<br /><em>another garage.</em></h2>
                </div>
                <div className="about-story-copy">
                    <p>Cars tell you when something is wrong. Our job is to listen closely enough to understand why.</p>
                    <p>From routine oil changes to serious performance work, we combine modern diagnostic tools with practical experience. That means less guesswork, better decisions, and a vehicle that feels right when it leaves our bay.</p>
                    <p className="about-location">Based in Abuja. Built around your next drive.</p>
                </div>
            </section>

            <section className="principles shell">
                {principles.map(([number, title, description, Icon]) => (
                    <article className="principle" key={title}>
                        <div className="principle-top"><span>{number}</span><Icon /></div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </article>
                ))}
            </section>

            <section className="about-cta shell">
                <div>
                    <p className="eyebrow"><span /> Ready when you are</p>
                    <h2>Let&apos;s make<br /><em>it count.</em></h2>
                </div>
                <Link className="button button-light" href="/auth/contact">Talk to the team <ArrowForward /></Link>
            </section>
        </main>
    );
}