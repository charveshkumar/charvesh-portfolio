import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personal } from '../data/personal';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    if (publicKey === 'public_key_placeholder') {
      setTimeout(() => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been prepared for transmission.'
        });
        if (formRef.current) formRef.current.reset();
      }, 800);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Your message was sent successfully! I will reply shortly.'
          });
          if (formRef.current) formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please email directly at charveshkumar@gmail.com'
          });
        }
      );
  };

  return (
    <section id="contact" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Giant Headline Row */}
        <div className="mb-20 border-b border-[#F1EEE8]/10 pb-16">
          <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-4">
            // 09. GET IN TOUCH
          </span>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F1EEE8] tracking-tighter leading-[0.85] uppercase font-extrabold">
            LET'S WORK <br />
            TOGETHER.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-[#B7B5B0] font-light max-w-xl mt-6 leading-relaxed">
            Building intelligent solutions with AI, ML and modern web technologies. Open to AI/ML engineering internships, full-stack projects, and technical collaborations.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-5 sm:p-8 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-4">
              <span className="font-mono text-[10px] text-[#777772] uppercase tracking-widest block border-b border-[#F1EEE8]/10 pb-3">
                DIRECT CONTACT CHANNELS
              </span>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-3.5 border border-[#F1EEE8]/10 rounded-xl hover:border-[#F1EEE8]/30 transition-colors"
              >
                <div className="p-2 sm:p-2.5 border border-[#F1EEE8]/10 rounded-lg text-[#F1EEE8] group-hover:bg-[#F1EEE8] group-hover:text-[#08090D] transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-[#777772] uppercase block">EMAIL</span>
                  <span className="font-mono text-xs text-[#F1EEE8] font-medium break-all">{personal.email}</span>
                </div>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 group p-3.5 border border-[#F1EEE8]/10 rounded-xl hover:border-[#F1EEE8]/30 transition-colors"
              >
                <div className="p-2.5 border border-[#F1EEE8]/10 rounded-lg text-[#F1EEE8] group-hover:bg-[#F1EEE8] group-hover:text-[#08090D] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#777772] uppercase block">PHONE</span>
                  <span className="font-mono text-xs text-[#F1EEE8] font-medium">{personal.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 border border-[#F1EEE8]/10 rounded-xl">
                <div className="p-2.5 border border-[#F1EEE8]/10 rounded-lg text-[#F1EEE8]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#777772] uppercase block">LOCATION</span>
                  <span className="font-mono text-xs text-[#F1EEE8] font-medium">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Profiles Box */}
            <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-4">
              <span className="font-mono text-[10px] text-[#777772] uppercase tracking-widest block">
                CONNECT ONLINE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 border border-[#F1EEE8]/10 rounded-xl text-[#F1EEE8] hover:border-[#F1EEE8]/30 transition-colors uppercase tracking-wider"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 border border-[#F1EEE8]/10 rounded-xl text-[#F1EEE8] hover:border-[#F1EEE8]/30 transition-colors uppercase tracking-wider"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 border border-[#F1EEE8]/10 rounded-xl text-[#F1EEE8] hover:border-[#F1EEE8]/30 transition-colors uppercase tracking-wider"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 md:p-10 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-6 relative"
            >
              <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block pb-4 border-b border-[#F1EEE8]/10">
                // TRANSMIT DIRECT MESSAGE
              </span>

              {status.message && (
                <div
                  className={`p-4 font-mono text-xs rounded-xl flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300'
                      : 'bg-red-950/40 border border-red-500/50 text-red-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="font-mono text-xs text-[#777772] uppercase block">
                  NAME <span className="text-[#F1EEE8]">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name / Organization"
                  className="w-full px-4 py-3 bg-[#08090D] border border-[#F1EEE8]/10 focus:border-[#F1EEE8] text-[#F1EEE8] font-mono text-xs rounded-xl outline-none transition-colors min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-[#777772] uppercase block">
                  EMAIL <span className="text-[#F1EEE8]">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-[#08090D] border border-[#F1EEE8]/10 focus:border-[#F1EEE8] text-[#F1EEE8] font-mono text-xs rounded-xl outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-[#777772] uppercase block">
                  MESSAGE <span className="text-[#F1EEE8]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Describe your project, internship opportunity, or inquiry..."
                  className="w-full px-4 py-3 bg-[#08090D] border border-[#F1EEE8]/10 focus:border-[#F1EEE8] text-[#F1EEE8] font-mono text-xs rounded-xl outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#F1EEE8] hover:bg-white text-[#08090D] font-mono text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4 text-[#08090D]" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
