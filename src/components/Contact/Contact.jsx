import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import backgroundImage from '../../assets/downtown.jpg'; // Ensure the path is correct
import clientData from '../../clientData'; // Import clientData

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setSuccessMessage('Your message has been sent successfully!');
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-screen text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col mt-16 md:flex-row w-full min-h-screen">
        {/* Left Section: Contact Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-end mb-6 items-center p-8 md:p-16 z-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold mb-8">CONTACT US</h2>
            <p>Name: {clientData.agentName}</p>
            <p>Phone: {clientData.contactDetails.phone}</p>
            <p>Email: {clientData.contactDetails.email}</p>
            <p>Address: {clientData.address}</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-0.5 bg-white opacity-50 z-10"></div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 z-10">
          <h2 className="text-4xl font-bold mb-8">SUBMIT A MESSAGE</h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            <div className="flex flex-col space-y-4">
              <label className="text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-white bg-transparent outline-none text-white"
                required
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-white bg-transparent outline-none text-white"
                required
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-lg">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-white bg-transparent outline-none text-white"
                required
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-lg">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-white bg-transparent outline-none text-white p-4"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacyPolicy"
                className="mt-1"
                required
              />
              <label htmlFor="privacyPolicy" className="text-sm text-white">
                By providing your contact information, you agree to our Privacy Policy and consent to receive marketing communications.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-green-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
