import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out to me for collaborations, project inquiries, or
          just to say hi! I'd love to hear from you.
        </p>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
