
import Link from "next/link";
import { Button, Paper } from "@mui/material";
import { AccessTime, ArrowForward, Email, LocationOn, Phone } from "@mui/icons-material";

const contactDetails = [
    { label: "Call / WhatsApp", value: "0704 745 8909", href: "tel:07047458909", Icon: Phone },
    { label: "Email", value: "sparksredline@gmail.com", href: "mailto:sparksredline@gmail.com", Icon: Email },
    { label: "Find the garage", value: "Shema Filling Station, before NAF Valley Estate, Abuja", href: "https://maps.google.com/?q=Shema+Filling+Station+Abuja", Icon: LocationOn },
];

export default function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-hero shell">
                <p className="eyebrow"><span /> Contact Spark&apos;s Redline</p>
                <h1>Good cars.<br /><em>Good people.</em></h1>
                <p>Have a question, a warning light, or a car that does not feel like itself anymore? Let&apos;s talk.</p>
            </section>

            <section className="contact-section shell">
                <div className="contact-intro">
                    <p className="eyebrow"><span /> Get in touch</p>
                    <h2>Bring us<br /><em>the details.</em></h2>
                    <p>Tell us what you are noticing and we&apos;ll point you in the right direction. For an appointment, use our booking form and we&apos;ll confirm availability with you.</p>
                    <Link className="text-link" href="/auth/services">Request an appointment <span>↗</span></Link>
                </div>

                <div className="contact-card-grid">
                    {contactDetails.map(({ label, value, href, Icon }) => (
                        <Paper className="contact-card" elevation={0} key={label}>
                            <Icon className="contact-card-icon" />
                            <div>
                                <small>{label}</small>
                                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{value}</a>
                            </div>
                        </Paper>
                    ))}
                    <Paper className="contact-card contact-hours" elevation={0}>
                        <AccessTime className="contact-card-icon" />
                        <div><small>Workshop hourss</small><p>Monday - Saturday<br /><strong>8:00 AM - 6:00 PM</strong></p><p>Sunday<br /><strong>By appointment</strong></p></div>
                    </Paper>
                </div>
            </section>

            <section className="contact-action shell">
                <div>
                    <p className="eyebrow"><span /> Start here</p>
                    <h2>Need the<br /><em>quickest answer?</em></h2>
                </div>
                <Button className="contact-button" component="a" href="https://wa.me/2347047458909" target="_blank" rel="noreferrer" endIcon={<ArrowForward />}>WhatsApp the team</Button>
            </section>
        </main>
    );
}