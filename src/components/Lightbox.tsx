import { useState, useCallback } from "react";

interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export const Lightbox = ({ isOpen, src, alt, onClose }: LightboxProps) => {
  if (!isOpen) return null;
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
      <img src={src} alt={alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export const useLightbox = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", alt: "" });
  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  }, []);
  const closeLightbox = useCallback(() => {
    setLightbox({ isOpen: false, src: "", alt: "" });
  }, []);
  return { lightbox, openLightbox, closeLightbox };
};
