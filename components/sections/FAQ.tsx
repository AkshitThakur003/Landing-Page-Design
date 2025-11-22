import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI analysis work?",
    answer: "We use advanced NLP (Natural Language Processing) to read your resume exactly how an ATS (Applicant Tracking System) and a human recruiter would. We compare your content against millions of successful resumes to identify gaps, weak verbs, and missing keywords."
  },
  {
    question: "Can I import my existing resume?",
    answer: "Absolutely. You can upload PDF or Word documents. Our parser extracts your data instantly so you don't have to re-type everything."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use bank-level encryption and never sell your data to third parties. You can delete your account and all associated data at any time."
  },
  {
    question: "What is JD Matching?",
    answer: "Job Description Matching allows you to paste a job posting next to your resume. We calculate a match score and give you a specific list of keywords and skills you need to add to increase your chances of an interview."
  }
];

const FAQItem = ({ faq, isOpen, onClick, id }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void, id: string }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  
  const headerId = `${id}-header`;
  const contentId = `${id}-content`;

  useEffect(() => {
    if (isOpen) {
      const updateHeight = () => {
        if (contentRef.current) {
          setHeight(contentRef.current.scrollHeight);
        }
      };

      // Initial measurement
      updateHeight();

      // Update on resize to handle text wrapping changes
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });

      if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
      }

      return () => resizeObserver.disconnect();
    } else {
      setHeight(0);
    }
  }, [isOpen, faq.answer]);

  return (
    <div 
      className={`border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-brand-200 ${
        isOpen ? 'border-brand-200 ring-1 ring-brand-100 bg-slate-50/50' : 'bg-white'
      }`}
    >
      <button 
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-inset rounded-2xl group select-none"
        onClick={onClick}
      >
        <span className={`font-semibold text-lg transition-colors duration-300 ${
          isOpen ? 'text-brand-700' : 'text-slate-900 group-hover:text-brand-600'
        }`}>
          {faq.question}
        </span>
        <div 
          aria-hidden="true"
          className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? 'bg-brand-100 text-brand-600 rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-500 rotate-0'
        }`}>
          <ChevronDown 
            size={20}
          />
        </div>
      </button>
      <div 
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[max-height,opacity]"
        style={{ 
          maxHeight: isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen || height > 0 ? 'visible' : 'hidden'
        }}
      >
        <div ref={contentRef} className="p-6 pt-0 text-slate-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              id={`faq-item-${index}`}
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};