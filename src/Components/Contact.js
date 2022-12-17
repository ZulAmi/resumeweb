import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  // if (data) {
  //   var contactName = data.name;
  //   var city = data.address.city;
  //   var phone = data.phone;
  //   var contactEmail = data.email;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:negahim666@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            Let's get in touch!
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '1000px', margin: '0 auto' }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            style={{ width: '700px' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '700px' }}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            value={subject}
            id="subject"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: '700px' }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            value={message}
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '700px', height: '200px' }}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

    </section>

  );
};

export default Contact;
