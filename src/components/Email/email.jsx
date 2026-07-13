import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_ExxMAILJS_PUBLIC_KEY;

const RECEIVER_EMAIL = "";

// Status: idle | sending | success | error

export default function EmailConnection({ t }) {
  const formRef   = useRef(null);
  const [status,   setStatus]   = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const data = new FormData(formRef.current);
    const senderName  = data.get("from_name")  || "Unknown";
    const senderEmail = data.get("from_email") || "";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  senderName,
          from_email: senderEmail,
          phone:      data.get("phone")    || "-",
          subject:    data.get("subject")  || "(No subject)",
          message:    data.get("message")  || "",
          to_email:   RECEIVER_EMAIL,
          reply_to:   senderEmail,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      formRef.current.reset();

      console.info(
        `✅ Email sent  From: ${senderName} <${senderEmail}>  To: ${RECEIVER_EMAIL}`
      );
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">{t.sections.contact}</h2>

      <form ref={formRef} onSubmit={handleSubmit} noValidate>

        {/* ── Hidden field: receiver email ───────────────────────── */}
        {/* Reference this as {{to_email}} inside your EmailJS template */}
        <input type="hidden" name="to_email" value={RECEIVER_EMAIL} />

        {/* ── Row 1: Name + Email ─────────────────────────────────── */}
        <div className="input-box">
          <input
            type="text"
            name="from_name"
            placeholder={t.contact.fullName}
            required
            disabled={status === "sending"}
          />
          <input
            type="email"
            name="from_email"
            placeholder={t.contact.email}
            required
            disabled={status === "sending"}
          />
        </div>

        {/* ── Row 2: Phone + Subject ───────────────────────────────── */}
        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder={t.contact.mobile}
            disabled={status === "sending"}
          />
          <input
            type="text"
            name="subject"
            placeholder={t.contact.subject}
            disabled={status === "sending"}
          />
        </div>

        {/* ── Message ─────────────────────────────────────────────── */}
        <textarea
          name="message"
          rows="10"
          placeholder={t.contact.message}
          required
          disabled={status === "sending"}
        />

        {/* ── Status feedback ──────────────────────────────────────── */}
        {status === "success" && (
          <div className="contact-alert contact-alert--success">
            <i className="fa-solid fa-circle-check" />
            {t.contact.successMsg ?? "Message sent successfully!"}
          </div>
        )}

        {status === "error" && (
          <div className="contact-alert contact-alert--error">
            <i className="fa-solid fa-circle-exclamation" />
            {errorMsg || (t.contact.errorMsg ?? "Failed to send. Please try again.")}
          </div>
        )}

        {/* ── Submit ──────────────────────────────────────────────── */}
        <input
          type="submit"
          value={status === "sending" ? (t.contact.sending ?? "Sending…") : t.contact.send}
          className="btn"
          disabled={status === "sending"}
          style={{
            opacity: status === "sending" ? 0.6 : 1,
            cursor:  status === "sending" ? "not-allowed" : "pointer",
          }}
        />

        {/* ── Contact info ────────────────────────────────────────── */}
        <div className="contact-details">
          <p>
            <i className="fa-solid fa-paper-plane" />{" "}
            <a href={`mailto:${RECEIVER_EMAIL}`}>{RECEIVER_EMAIL}</a>
          </p>
          <p>
            <i className="fa-solid fa-square-phone-flip" /> (+66) 983-562-019
          </p>
        </div>
      </form>
    </section>
  );
}