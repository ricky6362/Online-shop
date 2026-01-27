import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/Contact.css";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "General inquiry",
    message: "",
  });

  const contactDetails = useMemo(
    () => [
      {
        icon: Phone,
        label: "Phone",
        value: "+254 700 000 000",
        hint: "Mon–Fri, 9:00 AM–6:00 PM",
        href: "tel:+254700000000",
      },
      {
        icon: Mail,
        label: "Email",
        value: "support@yourbrand.com",
        hint: "We reply within 24 hours",
        href: "mailto:support@yourbrand.com",
      },
      {
        icon: MapPin,
        label: "Address",
        value: "Nairobi, Kenya",
        hint: "Visits by appointment",
        href: "https://maps.google.com/?q=Nairobi%2C%20Kenya",
      },
      {
        icon: Clock,
        label: "Working hours",
        value: "Mon–Fri: 9:00 AM–6:00 PM",
        hint: "Sat: 10:00 AM–2:00 PM",
      },
    ],
    []
  );

  const updateField = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const errors = [];
    if (!form.fullName.trim()) errors.push("Please enter your full name.");
    if (!form.email.trim()) errors.push("Please enter your email address.");
    if (!form.message.trim()) errors.push("Please write a message.");
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.push("Please enter a valid email address.");
    }
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length) {
      setStatus({ type: "error", message: errors[0] });
      return;
    }

    setStatus({ type: "success", message: "Message sent! We’ll respond shortly." });
    setForm({
      fullName: "",
      email: "",
      phone: "",
      topic: "General inquiry",
      message: "",
    });
  };

  return (
    <>
      <Header />

      <main className="cp-Contact" role="main">
        <div className="cp-Contact__container">
          <header className="cp-Contact__header">
            <p className="cp-Contact__eyebrow">Contact</p>
            <h1 className="cp-Contact__title">Let’s talk</h1>
            <p className="cp-Contact__subtitle">
              Send us a message and we’ll get back to you. Prefer a quick call or email?
              Our details are right here.
            </p>
          </header>

          <div className="cp-Contact__grid">
            {/* Form (first on mobile) */}
            <div className="cp-Contact__card cp-Contact__card--form">
              <div className="cp-Contact__cardTop">
                <div className="cp-Contact__badge">
                  <Send size={16} aria-hidden="true" />
                  <span>Message us</span>
                </div>
                <p className="cp-Contact__cardHint">Fields marked * are required.</p>
              </div>

              <form className="cp-Contact__form" onSubmit={onSubmit} noValidate>
                <div className="cp-Contact__row">
                  <label className="cp-Contact__field">
                    <span className="cp-Contact__label">Full name *</span>
                    <input
                      value={form.fullName}
                      onChange={updateField("fullName")}
                      className="cp-Contact__input"
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      placeholder="e.g., Richard Branson"
                    />
                  </label>

                  <label className="cp-Contact__field">
                    <span className="cp-Contact__label">Email *</span>
                    <input
                      value={form.email}
                      onChange={updateField("email")}
                      className="cp-Contact__input"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="e.g., name@email.com"
                    />
                  </label>
                </div>

                <div className="cp-Contact__row">
                  <label className="cp-Contact__field">
                    <span className="cp-Contact__label">Phone</span>
                    <input
                      value={form.phone}
                      onChange={updateField("phone")}
                      className="cp-Contact__input"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="e.g., +254 7xx xxx xxx"
                    />
                  </label>

                  <label className="cp-Contact__field">
                    <span className="cp-Contact__label">Topic</span>
                    <select
                      value={form.topic}
                      onChange={updateField("topic")}
                      className="cp-Contact__input cp-Contact__select"
                      name="topic"
                    >
                      <option>General inquiry</option>
                      <option>Order support</option>
                      <option>Technical help</option>
                      <option>Billing</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label className="cp-Contact__field">
                  <span className="cp-Contact__label">Message *</span>
                  <textarea
                    value={form.message}
                    onChange={updateField("message")}
                    className="cp-Contact__input cp-Contact__textarea"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help…"
                  />
                </label>

                {status.type !== "idle" && (
                  <div
                    className={`cp-Contact__notice ${
                      status.type === "success"
                        ? "cp-Contact__notice--success"
                        : "cp-Contact__notice--error"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} aria-hidden="true" />
                    ) : (
                      <span className="cp-Contact__noticeDot" aria-hidden="true" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button className="cp-Contact__btn" type="submit">
                  <span>Send message</span>
                  <Send size={18} aria-hidden="true" />
                </button>

                <p className="cp-Contact__fineprint">
                  By sending this message, you agree to be contacted regarding your request.
                </p>
              </form>
            </div>

            {/* Details (second on mobile) */}
            <aside className="cp-Contact__card cp-Contact__card--details">
              <div className="cp-Contact__detailsHeader">
                <h2 className="cp-Contact__detailsTitle">Details</h2>
                <p className="cp-Contact__detailsSubtitle">
                  Reach us directly or use the form. We’re happy to help.
                </p>
              </div>

              <div className="cp-Contact__detailsList">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="cp-Contact__detailsIcon" aria-hidden="true">
                        <Icon size={18} />
                      </div>
                      <div className="cp-Contact__detailsText">
                        <div className="cp-Contact__detailsLabel">{item.label}</div>
                        <div className="cp-Contact__detailsValue">{item.value}</div>
                        {item.hint && (
                          <div className="cp-Contact__detailsHint">{item.hint}</div>
                        )}
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      className="cp-Contact__detailsItem cp-Contact__detailsItem--link"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="cp-Contact__detailsItem">
                      {content}
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
