"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

const NAV_LINKS = [
  { name: "Plan Trips", href: "/" },
  { name: "Railway Booking", href: "/railway" },
  { name: "Flight Booking", href: "/flight" },
  { name: "Consultancy", href: "/consultancy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  /* ---------------- Scroll Logic ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Body Scroll Lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  /* ---------------- MOBILE MENU ANIMATIONS ---------------- */
  useLayoutEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const links = menu.querySelectorAll(".mobile-nav-link");

    const ctx = gsap.context(() => {
      if (isMobileMenuOpen) {
        // OPEN ANIMATION
        // First set initial state
        gsap.set(menu, { x: "100%" });
        gsap.set(links, { y: 30, opacity: 0 });

        // Then animate in
        gsap.to(menu, {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(links, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.15,
          ease: "power2.out",
        });
      } else {
        // CLOSED STATE - instant reset
        gsap.set(menu, { x: "100%" });
        gsap.set(links, { y: 30, opacity: 0 });
      }
    }, menu);

    return () => ctx.revert();
  }, [isMobileMenuOpen]);

  /* ---------------- CLOSE WITH SMOOTH ANIMATION ---------------- */
  const closeMobileMenuSmooth = (callback) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const menu = mobileMenuRef.current;
    if (!menu) {
      setIsAnimating(false);
      callback?.();
      return;
    }

    const links = menu.querySelectorAll(".mobile-nav-link");

    // Callback IMMEDIATELY execute karo (revealing effect ke liye)
    if (callback) {
      callback();
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      },
    });

    tl.to(links, {
      y: 30,
      opacity: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.in",
    }).to(
      menu,
      {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      },
      "-=0.15"
    );
  };

  /* ---------------- Desktop Hover Animation ---------------- */
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link-desktop");

    links.forEach((link) => {
      const href = link.getAttribute("href");

      if (href !== pathname) {
        const onEnter = () => {
          gsap.to(link, { y: -2, duration: 0.2 });
        };

        const onLeave = () => {
          gsap.to(link, { y: 0, duration: 0.2 });
        };

        link.addEventListener("mouseenter", onEnter);
        link.addEventListener("mouseleave", onLeave);

        return () => {
          link.removeEventListener("mouseenter", onEnter);
          link.removeEventListener("mouseleave", onLeave);
        };
      }
    });
  }, [pathname]);

  /* ---------------- Contact Logic ---------------- */
  const goToContact = () => {
    closeMobileMenuSmooth(() => {
      if (pathname === "/") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/?scrollTo=contact");
      }
    });
  };

  /* ---------------- Handle Mobile Link Click ---------------- */
  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();

    // Agar same page hai to menu close karo without navigation
    if (pathname === href) {
      closeMobileMenuSmooth();
      return;
    }

    // Different page hai to smooth close then navigate
    closeMobileMenuSmooth(() => {
      router.push(href);
    });
  };

  const navClass = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-slate-900/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg"
        : "bg-transparent py-6"
    }
  `;

  const desktopLinkClass = (href) =>
    `nav-link-desktop relative uppercase text-xs tracking-widest font-bold transition-colors inline-flex items-center
     ${
       pathname === href
         ? "text-yellow-500"
         : "text-white hover:text-yellow-500"
     }`;

  return (
    <nav ref={navRef} className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-serif font-bold text-white z-50 hover:text-yellow-500 transition-colors"
        >
          <Compass className="text-yellow-500" />
          RELAX TOURS
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${desktopLinkClass(item.href)} relative py-1 
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:h-[2px] after:w-0 after:bg-yellow-500 
    after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={goToContact}
            className="ml-4 px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 uppercase text-xs tracking-widest font-bold"
          >
            Contact
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="xl:hidden text-white z-50 relative hover:text-yellow-500 transition-colors"
          onClick={() => {
            if (!isAnimating) {
              setIsMobileMenuOpen(true);
            }
          }}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 h-screen w-screen bg-slate-900 z-50
          flex flex-col items-center justify-center space-y-8 xl:hidden"
          style={{ transform: "translateX(100%)" }}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 hover:text-yellow-500 transition-colors"
            onClick={() => closeMobileMenuSmooth()}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleMobileLinkClick(e, item.href)}
              className={`mobile-nav-link text-2xl font-serif cursor-pointer transition-colors hover:text-yellow-400 ${
                pathname === item.href ? "text-yellow-500" : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={goToContact}
            className="mobile-nav-link text-2xl text-yellow-500 border-2 p-2 border-yellow-500 hover:bg-yellow-500 hover:text-slate-900 transition-colors"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
