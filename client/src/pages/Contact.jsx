import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../assets/Images/avatar-two.png';
import gsap from 'gsap';
import { validate } from '../validation/index.js';
const Contact = () => {
  const [sending, setSending] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [formError, setFormError] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.5,
      delay: 0.5,
    });
  }, []);

  // dynamic date function for copyright
  const date = new Date();
  const year = date.getFullYear();

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    try {
      const payload = { [name]: value };
      const res = await validate(payload);
      setFormError(res);
    } catch (error) {
      console.log('There was an error:', error);
    }
  };

  // submission and joi validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target.closest('form');
    const formToSend = new FormData(formElement);
    setSending('📧 Hold tight while we send your message');
    formToSend.append('access_key', 'd42806d5-a27e-4db5-a11c-183f4bec2ee0');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formToSend,
    });

    const result = await response.json();

    if (result.success) {
      setSending('✅ Email received, I will respond asap!');
      setFormData({
        email: '',
        name: '',
        message: '',
      });
    } else {
      setSending('🤔 Email failed, please try again.');
    }
  };
  return (
    <section className="contact">
      <div className="contact__info" ref={contactRef}>
        <div className="contact__container">
          <img
            className="contact__avatar"
            src={Avatar}
            alt="Evan Parker avatar"
          />
        </div>
        <div className="contact__copyright">
          <p> Evan Parker ⓒ {year}</p>

          <form
            className="contact__form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <div
              className="error-container"
              style={{ height: formError ? 'auto' : '0' }}
            >
              {formError &&
                formError.map((error, index) =>
                  error.key === 'email' ? (
                    <p key={index} style={{ color: '#FF3E3E' }}>
                      {error.message}
                    </p>
                  ) : null
                )}
            </div>
            <input
              type="hidden"
              name="access_key"
              value="d42806d5-a27e-4db5-a11c-183f4bec2ee0"
            ></input>
            <label htmlFor="email"></label>

            <input
              className="contact__field contact__field--input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
            />
            <div
              className="error-container"
              style={{ height: formError ? 'auto' : '0' }}
            >
              {formError &&
                formError.map((error, index) =>
                  error.key === 'name' ? (
                    <p key={index} style={{ color: '#FF3E3E' }}>
                      {error.message}
                    </p>
                  ) : null
                )}
            </div>
            <label htmlFor="name"></label>
            <input
              className="contact__field contact__field--input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
            />
            <div
              className="error-container"
              style={{ height: formError ? 'auto' : '0' }}
            >
              {formError &&
                formError.map((error, index) =>
                  error.key === 'message' ? (
                    <p key={index} style={{ color: '#FF3E3E' }}>
                      {error.message}
                    </p>
                  ) : null
                )}
            </div>
            <label htmlFor="email-body"></label>
            <textarea
              className="contact__field"
              name="message"
              id=""
              cols="30"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
            ></textarea>
            <button
              type="submit"
              className="contact__contact-btn"
              onClick={handleSubmit}
            >
              <div className="contact__contact-btn-container">
                <p className="contact__contact-btn-text">Contact Me</p>
              </div>
              <div className="contact__contact-btn-inner">
                <p className="contact__contact-btn-inner-text">Now!</p>
              </div>
            </button>
            {sending && <p>{sending}</p>}
          </form>
          {/* scroll to top button- nested */}
        </div>
      </div>
      {/* Accreditation for Flaticon icons */}
      <div className="contact__accreditation">
        <a href="https://www.flaticon.com/icons" title="Flaticon icons">
          Skill icons created by Freepik - Flaticon
        </a>
      </div>
    </section>
  );
};

export default Contact;
