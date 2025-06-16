import React, { useState } from 'react';
import styles from './Contact.module.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  timeline: '',
  message: ''
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://formspree.io/f/xnnvvlrj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm(initialForm);
      } else {
        setStatus('Failed to send.');
      }
    } catch {
      setStatus('Failed to send.');
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contact me</h2>
      <p className={styles.subtitle}>
        Feel free to reach out — I’m open to new projects and opportunities.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className={styles.input}
            value={form.phone}
            onChange={handleChange}
          />
          <select
            name="service"
            className={styles.input}
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Service Of Interest</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>UI/UX Design</option>
            <option>SEO Optimization</option>
          </select>
        </div>
        <div className={styles.row}>
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            className={`${styles.input} ${styles.timelineInput}`}
            value={form.timeline}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Project Details..."
            className={styles.textarea}
            rows={3}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.buttonRow}>
          <button type="submit" className={styles.sendBtn}>Send</button>
        </div>
        {status && (
          <div
            className={
              status === 'Message sent!'
                ? styles.status
                : `${styles.status} ${styles.statusError}`
            }
          >
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;