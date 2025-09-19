import { useState } from "react";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can connect to an API, backend, or service like EmailJS
    console.log({
      email,
      message,
      newsletter,
    });

    setSubmitted(true);

    // reset form
    setEmail("");
    setMessage("");
    setNewsletter(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Contact Us
      </h1>

      {submitted && (
        <p style={{ color: "green", marginBottom: "15px" }}>
          ✅ Thank you for contacting us! We’ll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />{" "}
            Subscribe to Newsletter
          </label>
        </div>

        <button
          type="submit"
          style={{
            background: "#007BFF",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
