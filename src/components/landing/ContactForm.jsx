import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service_interest: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const serviceOptions = [
        'AI-Powered SaaS Platforms',
        'Intelligent Web Apps',
        'Modern Websites & Landing Pages',
        'AI Automation Tools',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
            const response = await axios.post(`${apiUrl}/api/contact`, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || null,
                message: formData.message,
                service_interest: formData.service_interest || null
            });

            if (response.data.status === 'success') {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    service_interest: ''
                });
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to submit form. Please try emailing directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={1}
                        maxLength={100}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1] transition-colors"
                        placeholder="Your name"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1] transition-colors"
                        placeholder="your@email.com"
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                        Phone (Optional)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={20}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1] transition-colors"
                        placeholder="+1 234 567 8900"
                    />
                </div>

                {/* Service Interest */}
                <div>
                    <label htmlFor="service_interest" className="block text-white/80 text-sm font-medium mb-2">
                        Service Interest (Optional)
                    </label>
                    <select
                        id="service_interest"
                        name="service_interest"
                        value={formData.service_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00FFD1] transition-colors"
                    >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((service) => (
                            <option key={service} value={service} className="bg-black">
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        minLength={10}
                        maxLength={1000}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1] transition-colors resize-none"
                        placeholder="Tell me about your project..."
                    />
                    <div className="text-right text-white/40 text-xs mt-1">
                        {formData.message.length}/1000
                    </div>
                </div>

                {/* Status Message */}
                {status.message && (
                    <div className={`p-4 border flex items-start gap-3 ${status.type === 'success'
                            ? 'bg-[#00FFD1]/10 border-[#00FFD1]/30 text-[#00FFD1]'
                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                        }`}>
                        {status.type === 'success' ? (
                            <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                        ) : (
                            <XCircle size={20} className="flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm">{status.message}</p>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-transparent hover:text-[#00FFD1] transition-all duration-400 border-2 border-[#00FFD1] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                    {loading ? (
                        <>
                            <Loader2 size={22} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Mail size={22} />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
