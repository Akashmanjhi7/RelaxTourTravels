export const WHATSAPP_NUMBER = '918700574739';

export const openWhatsApp = (message) => {
  if (typeof window === 'undefined') return;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
