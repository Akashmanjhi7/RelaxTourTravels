'use client';

import { useState } from 'react';
import { openWhatsApp } from '@/utils/WhatsApp';
export const useEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [destination, setDestination] = useState('');

  const openEnquiry = (dest) => {
    setDestination(dest);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setDestination('');
  };

  return {
    isOpen,
    destination,
    openEnquiry,
    closeEnquiry
  };
};
