'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Hero from '@/components/Hero';
import TripsSection from '@/components/TripsSection';
import InternationalSection from '@/components/InternationalSection';
import BookingServices from '@/components/BookingServices';
import Contact from '@/components/Contact';
import EnquiryModal from '@/components/EnquiryModal';

import { useEnquiry } from '@/hooks/useEnquiry';

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const enquiry = useEnquiry();

  // ✅ Scroll handler (URL-driven)
  useEffect(() => {
    const scrollTarget = searchParams.get('scrollTo');

    if (!scrollTarget) return;

    const element = document.getElementById(scrollTarget);
    element?.scrollIntoView({ behavior: 'smooth' });

    // ✅ clean only query param (do not reset whole URL)
    const params = new URLSearchParams(searchParams.toString());
    params.delete('scrollTo');

    router.replace(`/?${params.toString()}`, { scroll: false });
  }, [searchParams, router]);

  return (
    <>
      <Hero />

      <TripsSection onEnquiry={enquiry.openEnquiry} />

      <InternationalSection onEnquiry={enquiry.openEnquiry} />

      <BookingServices />

      {/* Contact anchor */}
      <section id="contact">
        <Contact />
      </section>

      {/* Global Enquiry Modal */}
      <div>
        
      </div>
      <EnquiryModal
        isOpen={enquiry.isOpen}
        onClose={enquiry.closeEnquiry}
        destination={enquiry.destination}
      />
    </>
  );
}
