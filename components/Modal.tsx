'use client';

import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'student' | 'employer';
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ll be in touch soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          additionalInfo: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-60" onClick={onClose} />
      
      <div className="relative bg-[#2a2a2a] rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a8a8a8] hover:text-[#f5e6d3] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-[#f5e6d3] mb-2">
          Get Notified - {type === 'student' ? 'Students' : 'Employers'}
        </h2>
        <p className="text-[#a8a8a8] mb-6">
          Be the first to know when we launch!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#f5e6d3] text-sm font-medium mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-[#f5e6d3] focus:outline-none focus:border-[#3a7b85] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#f5e6d3] text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-[#f5e6d3] focus:outline-none focus:border-[#3a7b85] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[#f5e6d3] text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-[#f5e6d3] focus:outline-none focus:border-[#3a7b85] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-[#f5e6d3] text-sm font-medium mb-1">
              {type === 'student' 
                ? 'What kind of part-time work are you looking for? (Optional)' 
                : 'What kind of jobs are you looking to hire for? (How often, schedule, etc.) (Optional)'}
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={3}
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-[#f5e6d3] focus:outline-none focus:border-[#3a7b85] transition-colors resize-none"
            />
          </div>

          {submitMessage && (
            <div className={`text-sm ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e05745] hover:bg-[#c74636] disabled:bg-[#804030] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}