function Hire() {
  return (
    <>
      <div className="skill-show-div">
        <h2>
          Contact me for software development, data analysis services, and system
          design.
        </h2>

        <p>Contact details:</p>
        <a href="mailto:cmwangi0075@gmail.com" className="contact-link">
          Send mail
        </a>
        <a
          href="https://wa.me/254705796880?text=Hi%20Collins%2C%20am%20interested%20with%20your%20digital%20services%20and%20I%20would%20like%20to%20know%20more."
          className="contact-link"
        >
          WhatsApp me
        </a>
        <a
          href="https://www.linkedin.com/in/collins-mwangi-918580357"
          className="contact-link"
        >
          LinkedIn
        </a>
        <p>Call/SMS: 0705796880</p>

        {/* --- Contact Form Below Your Original Section --- */}
        <div className="contact-section">
          <h3>Send Me a Message Directly</h3>
          <form
            action="https://formsubmit.co/cmwangi0075@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thankyou.html"
            />

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Optional"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hire;
