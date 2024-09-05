import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Position is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setErrors({});
    // Add form submission logic here
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px' }}>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Name" />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px' }}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Email" />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px' }}>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Phone Number" />
          {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px' }}>Position Applied For</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Position" />
          {errors.position && <span style={{ color: 'red' }}>{errors.position}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px' }}>Cover Letter</label>
          <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Cover Letter" />
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#66BB6A'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} aria-label="Submit Application">
          Submit Application
        </button>
      </form>
      {submitted && <p style={{ marginTop: '15px', color: 'green' }}>Thank you for your application!</p>}
    </div>
  );
};

export default JobApplicationForm;