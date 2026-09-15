
"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Button, MenuItem, TextField } from "@mui/material";

const serviceOptions = [
    "Engine Overhaul",
    "ECU Tuning",
    "Deep Diagnostics",
    "Suspension Repair",
    "Suspension Upgrades",
    "Custom Exhaust",
    "Transmission Repair",
    "Turbo Installation",
    "Home Service",
    "Routine Services",
];

const fieldSx = {
    "& .MuiInputLabel-root": { color: "#85827c" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#e3262e" },
    "& .MuiOutlinedInput-root": {
        color: "#f1efe9",
        backgroundColor: "#111110",
        "& fieldset": { borderColor: "#383633" },
        "&:hover fieldset": { borderColor: "#77756f" },
        "&.Mui-focused fieldset": { borderColor: "#e3262e" },
    },
    "& .MuiFormHelperText-root": { color: "#e3262e", marginLeft: 0 },
};

const validationSchema = Yup.object({
    name: Yup.string().trim().min(2, "Enter your full name").required("Your name is required"),
    phone: Yup.string().trim().min(7, "Enter a valid phone number").required("Your phone number is required"),
    email: Yup.string().email("Enter a valid email address").required("Your email is required"),
    address: Yup.string().trim().min(5, "Enter your address").required("Your address is required"),
    vehicleType: Yup.string().trim().required("Enter your vehicle type"),
    vehicleYear: Yup.number().typeError("Enter a valid year").integer("Enter a whole year").min(1900, "Enter a valid year").max(2100, "Enter a valid year").required("Your vehicle year is required"),
    vehicleModel: Yup.string().trim().required("Enter your vehicle model"),
    service: Yup.string().required("Choose a service"),
    date: Yup.date().required("Choose an appointment date").typeError("Choose a valid date"),
    time: Yup.string().required("Choose an appointment time"),
    notes: Yup.string().max(300, "Keep notes under 300 characters"),
});

export default function Services() {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            address: "",
            vehicleType: "",
            vehicleYear: "",
            vehicleModel: "",
            service: "",
            date: "",
            time: "",
            notes: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Appointment request", values);
            setSubmitted(true);
            resetForm();
        },
    });

    const showError = (field) => formik.touched[field] && Boolean(formik.errors[field]);

    return (
        <main className="appointment-page">
            <section className="appointment-hero shell">
                <div className="appointment-intro">
                    <p className="eyebrow"><span /> Book your visit</p>
                    <h1>Let&apos;s get your<br /><em>car right.</em></h1>
                    <p className="appointment-lede">Tell us what your car needs and when you would like to come in. We&apos;ll confirm your appointment and prepare for your visit.</p>
                    <div className="appointment-note">
                        <strong>Before you arrive</strong>
                        <span>Bring your vehicle details and any warning-light information. Clear answers start with the right context.</span>
                    </div>
                </div>
                <div className="appointment-image">
                    <Image src="/rdflyer.jpeg" alt="Spark's Redline Performance service flyer" fill priority sizes="(max-width: 760px) 100vw, 42vw" />
                    <span>REDLINE<br /><em>service desk</em></span>
                </div>
            </section>

            <section className="appointment-section shell">
                <div className="appointment-heading">
                    <p className="eyebrow"><span /> Appointment details</p>
                    <h2>Book an<br /> <em>Appointment.</em></h2>
                    <p>Appointments are confirmed by our team. For urgent issues, call or WhatsApp us directly.</p>
                    <a className="text-link" href="tel:07047458909">Call 0704 745 8909 <span>↗</span></a>
                </div>

                <form className="appointment-form" onSubmit={formik.handleSubmit} noValidate>
                    {submitted && <Alert className="appointment-alert" severity="success">Request received. We&apos;ll contact you shortly to confirm the time.</Alert>}

                    <div className="form-grid">
                        <TextField fullWidth id="name" name="name" label="Full name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("name")} helperText={showError("name") ? formik.errors.name : ""} sx={fieldSx} />
                        <TextField fullWidth id="phone" name="phone" label="Phone number" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("phone")} helperText={showError("phone") ? formik.errors.phone : ""} sx={fieldSx} />
                        <TextField fullWidth id="email" name="email" label="Email address" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("email")} helperText={showError("email") ? formik.errors.email : ""} sx={fieldSx} />
                        <TextField fullWidth id="address" name="address" label="Home or work address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("address")} helperText={showError("address") ? formik.errors.address : ""} sx={fieldSx} />
                        <TextField fullWidth id="vehicleType" name="vehicleType" label="Vehicle type" placeholder="e.g. SUV, sedan, truck" value={formik.values.vehicleType} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("vehicleType")} helperText={showError("vehicleType") ? formik.errors.vehicleType : ""} sx={fieldSx} />
                        <TextField fullWidth id="vehicleModel" name="vehicleModel" label="Vehicle model" placeholder="e.g. Toyota Camry" value={formik.values.vehicleModel} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("vehicleModel")} helperText={showError("vehicleModel") ? formik.errors.vehicleModel : ""} sx={fieldSx} />
                        <TextField fullWidth id="vehicleYear" name="vehicleYear" label="Vehicle year" type="number" slotProps={{ htmlInput: { min: 1900, max: 2100 } }} value={formik.values.vehicleYear} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("vehicleYear")} helperText={showError("vehicleYear") ? formik.errors.vehicleYear : ""} sx={fieldSx} />
                        <TextField fullWidth select id="service" name="service" label="Service needed" value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("service")} helperText={showError("service") ? formik.errors.service : ""} sx={fieldSx}>
                            {serviceOptions.map((service) => <MenuItem key={service} value={service}>{service}</MenuItem>)}
                        </TextField>
                        <TextField fullWidth id="date" name="date" label="Preferred date" type="date" slotProps={{ inputLabel: { shrink: true } }} value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("date")} helperText={showError("date") ? formik.errors.date : ""} sx={fieldSx} />
                        <TextField fullWidth id="time" name="time" label="Preferred time" type="time" slotProps={{ inputLabel: { shrink: true } }} value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("time")} helperText={showError("time") ? formik.errors.time : ""} sx={fieldSx} />
                        <TextField fullWidth multiline minRows={4} id="notes" name="notes" label="Tell us more (optional)" placeholder="What are you noticing? Any warning lights?" value={formik.values.notes} onChange={formik.handleChange} onBlur={formik.handleBlur} error={showError("notes")} helperText={showError("notes") ? formik.errors.notes : ""} sx={{ ...fieldSx, gridColumn: "1 / -1" }} />
                    </div>

                    <div className="form-submit">
                        <p>We&apos;ll review your request and get back to you with availability.</p>
                        <Button type="submit" variant="contained">Book appointment </Button>
                    </div>
                </form>
            </section>
        </main>
    );
}