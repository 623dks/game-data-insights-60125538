import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DataSection from "@/components/DataSection";
import ModelsSection from "@/components/ModelsSection";
import ConclusionsSection from "@/components/ConclusionsSection";
import Footer from "@/components/Footer";
import { Lightbox, useLightbox } from "@/components/Lightbox";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { lightbox, openLightbox, closeLightbox } = useLightbox();

  useEffect(() => {
    // Hero entrance
    gsap.fromTo(
      "#hero .fade-up",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.15 }
    );

    // Scroll-triggered reveals (skip hero)
    const revealOnScroll = (sel: string, x: number, y: number) => {
      gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
        if (el.closest("#hero")) return;
        gsap.fromTo(
          el,
          { x, y, opacity: 0 },
          {
            x: 0, y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" },
          }
        );
      });
    };

    revealOnScroll(".fade-up", 0, 40);
    revealOnScroll(".fade-left", -30, 0);
    revealOnScroll(".fade-right", 30, 0);

    // Clip-path image reveals
    gsap.utils.toArray<HTMLElement>(".will-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none none" },
        }
      );
    });

    // Parallax
    gsap.utils.toArray<HTMLElement>(".parallax-target").forEach((img) => {
      gsap.fromTo(img, { y: -20 }, {
        y: 20, ease: "none",
        scrollTrigger: { trigger: img.closest(".img-wrap") || img, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // ARM tiles stagger
    gsap.utils.toArray<HTMLElement>(".arm-tile").forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: (i % 5) * 0.05,
        scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none none" },
      });
    });

    // Callout numbers
    gsap.utils.toArray<HTMLElement>(".stat-box").forEach((el) => {
      gsap.fromTo(el.querySelector(".font-heading"), { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // Q items slide
    gsap.utils.toArray<HTMLElement>(".q-item").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, x: -12 }, {
        opacity: 1, x: 0, duration: 0.4, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
      });
    });

    // Section transitions — subtle background shift
    gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
      gsap.fromTo(section, { opacity: 0.7 }, {
        opacity: 1, duration: 0.5,
        scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeLightbox]);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <hr className="section-divider" />
      <IntroSection />
      <hr className="section-divider" />
      <DataSection onImageClick={openLightbox} />
      <hr className="section-divider" />
      <ModelsSection onImageClick={openLightbox} />
      <hr className="section-divider" />
      <ConclusionsSection />
      <Footer />
      <Lightbox
        isOpen={lightbox.isOpen}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default Index;
