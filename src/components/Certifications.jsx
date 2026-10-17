import React, { useState, useEffect } from 'react';
import { certifications } from '../data/certifications';
import { ArrowUpRight, ExternalLink, X, FileText, CheckCircle2, Award, Eye, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle modal escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const categories = ['All', 'Hackathons', 'Internships', 'Coursework'];

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-12 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 08. VERIFIED CREDENTIALS & ACHIEVEMENTS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              CERTIFICATIONS & CREDENTIALS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            OFFICIAL HACKATHONS, PROGRAMMING CERTIFICATIONS & INTERNSHIP CREDENTIALS
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? certifications.length
              : certifications.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#F1EEE8] text-[#08090D] border-[#F1EEE8] font-bold shadow-md'
                    : 'bg-[#101116] text-[#B7B5B0] border-[#F1EEE8]/10 hover:border-[#F1EEE8]/30 hover:text-[#F1EEE8]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#08090D]/15 text-[#08090D]' : 'bg-[#F1EEE8]/5 text-[#777772]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <article
              key={cert.id}
              className="bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#F1EEE8]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
            >
              {/* Certificate Image / Document Preview Header */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full aspect-[16/10] bg-[#0c0d12] border-b border-[#F1EEE8]/10 flex items-center justify-center p-3 sm:p-4 overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View full certificate: ${cert.title}`}
              >
                {cert.fileType === 'image' ? (
                  <img
                    src={cert.previewImage || cert.fileUrl}
                    alt={`Certificate preview for ${cert.title}`}
                    className="max-h-full max-w-full object-contain rounded transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  /* Stylized PDF Document Preview */
                  <div className="w-full h-full rounded bg-gradient-to-br from-[#161822] via-[#101116] to-[#0d0e14] border border-[#F1EEE8]/10 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#777772]">
                      <div className="flex items-center gap-2 text-[#F1EEE8]">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="uppercase tracking-wider font-semibold">Verified Credential</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#F1EEE8]/5 text-[#B7B5B0] border border-[#F1EEE8]/10">
                        PDF
                      </span>
                    </div>

                    <div className="space-y-1.5 my-auto py-2">
                      <span className="font-mono text-[10px] text-[#B7B5B0] uppercase tracking-wider block">
                        {cert.organization || cert.issuer}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl text-[#F1EEE8] font-bold uppercase tracking-tight line-clamp-2">
                        {cert.title}
                      </h4>
                      <span className="font-mono text-[11px] text-[#777772] block">
                        Recipient: M Charvesh Kumar
                      </span>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[10px] text-[#777772] pt-2 border-t border-[#F1EEE8]/10">
                      <span>{cert.formattedDate}</span>
                      {cert.score && (
                        <span className="text-emerald-400 font-semibold">Score: {cert.score}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#08090D]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1EEE8] text-[#08090D] font-mono text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Information Beneath the Certificate Image */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  
                  {/* Index, Category & Type Badge Row */}
                  <div className="flex items-center justify-between font-mono text-xs text-[#777772]">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-2xl text-[#F1EEE8] font-bold">
                        {cert.number}
                      </span>
                      <span className="text-[#F1EEE8]/30">/</span>
                      <span className="px-2.5 py-0.5 rounded-full border border-[#F1EEE8]/10 bg-[#08090D] text-[10px] text-[#B7B5B0] uppercase tracking-wider">
                        {cert.type}
                      </span>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#777772]">
                      {cert.formattedDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl text-[#F1EEE8] uppercase font-bold tracking-tight group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#B7B5B0]">
                    <Award className="w-4 h-4 text-[#E50920] shrink-0" />
                    <span className="font-medium">{cert.organization || cert.issuer}</span>
                  </div>

                  {/* Certificate Information Metadata Row */}
                  <div className="space-y-1.5 pt-2 pb-2 border-y border-[#F1EEE8]/10 font-mono text-[11px]">
                    <div className="flex items-baseline justify-between text-[#777772]">
                      <span className="uppercase tracking-wider">Type:</span>
                      <span className="text-[#F1EEE8] font-medium text-right">{cert.type}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-[#777772]">
                      <span className="uppercase tracking-wider">Issue Date:</span>
                      <span className="text-[#F1EEE8] font-medium">{cert.date}</span>
                    </div>
                    {cert.certificateId && (
                      <div className="flex items-baseline justify-between text-[#777772]">
                        <span className="uppercase tracking-wider">Certificate ID:</span>
                        <span className="text-emerald-400 font-semibold tracking-wider font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          {cert.certificateId}
                        </span>
                      </div>
                    )}
                    {cert.score && (
                      <div className="flex items-baseline justify-between text-[#777772]">
                        <span className="uppercase tracking-wider">Consolidated Score:</span>
                        <span className="text-emerald-400 font-semibold">{cert.score}</span>
                      </div>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#777772] font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* View Certificate Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="group/btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#F1EEE8]/15 hover:border-[#F1EEE8] bg-[#14161E] text-xs sm:text-sm font-mono text-[#F1EEE8] uppercase tracking-wider transition-all duration-300 hover:bg-[#F1EEE8] hover:text-[#08090D] shadow-lg cursor-pointer"
                    aria-label={`View Certificate: ${cert.title}`}
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Lightbox / PDF Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fade-scale"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedCert(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <div className="bg-[#101116] border border-[#F1EEE8]/20 p-4 sm:p-6 rounded-2xl max-w-5xl w-full max-h-[95vh] flex flex-col justify-between relative shadow-2xl overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#F1EEE8]/10 font-mono text-xs">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#F1EEE8]" />
                <div>
                  <h3 id="certificate-modal-title" className="text-[#F1EEE8] font-semibold uppercase tracking-wider truncate max-w-xs sm:max-w-md">
                    {selectedCert.title}
                  </h3>
                  <span className="text-[#777772] text-[11px] block">
                    {selectedCert.organization || selectedCert.issuer}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={selectedCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#F1EEE8]/20 hover:border-[#F1EEE8] text-[11px] text-[#F1EEE8] rounded-full transition-colors uppercase tracking-wider hover:bg-white/5"
                  aria-label="Open certificate in new tab"
                >
                  <span>OPEN IN NEW TAB</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 sm:p-2 rounded-full border border-[#F1EEE8]/20 text-[#777772] hover:text-[#F1EEE8] hover:border-[#F1EEE8] transition-colors cursor-pointer"
                  aria-label="Close modal (Escape)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Viewer Body */}
            <div className="flex-1 min-h-[300px] sm:min-h-[420px] md:min-h-[500px] bg-[#08090D] border border-[#F1EEE8]/10 rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-4 relative">
              {selectedCert.fileType === 'image' ? (
                <img
                  src={selectedCert.fileUrl}
                  alt={`Full certificate for ${selectedCert.title}`}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <iframe
                  src={selectedCert.fileUrl}
                  title={selectedCert.title}
                  className="w-full h-[68vh] rounded-lg border-0 bg-white/5"
                />
              )}
            </div>

            {/* Modal Metadata Footer */}
            <div className="pt-4 mt-4 border-t border-[#F1EEE8]/10 space-y-3 font-mono text-[11px]">
              {selectedCert.details && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedCert.details.map((detail, dIdx) => (
                    <div key={dIdx} className="space-y-0.5">
                      <span className="text-[#777772] block uppercase tracking-wider">{detail.label}</span>
                      <span className="text-[#F1EEE8] font-medium truncate block">{detail.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedCert.certificateId && (
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F1EEE8]/5 text-[11px] text-[#777772]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Certificate ID: <strong className="text-[#F1EEE8] font-mono">{selectedCert.certificateId}</strong></span>
                  </div>
                  <span className="text-[10px] text-[#777772] italic">
                    Scan the QR code on the certificate to verify authenticity.
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
