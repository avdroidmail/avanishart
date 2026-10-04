import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

/* ─────────────────────────────────────────────────────────
   Navbar
   • Desktop (≥ md) → always-visible horizontal top bar
   • Mobile  (< md) → hamburger + full-screen slide-out panel
───────────────────────────────────────────────────────── */
const Navbar = () => {
  // ── Mobile slide-out refs / state ──
  const mobileNavRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const midLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  // ── Desktop scroll state ──
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["services", "about", "work", "contact"];

  // ── GSAP: mobile panel animations ──
  useGSAP(() => {
    if (!mobileNavRef.current) return;

    gsap.set(mobileNavRef.current, { xPercent: 100 });
    gsap.set([...linksRef.current, contactRef.current].filter(Boolean), {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(mobileNavRef.current, { xPercent: 0, duration: 0.9, ease: "power3.out" })
      .to(
        linksRef.current,
        { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "<"
      )
      .to(
        contactRef.current,
        { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, { rotate: 45, y: 7, width: "32px", duration: 0.35, ease: "power2.inOut" })
      .to(midLineRef.current, { scaleX: 0, opacity: 0, duration: 0.2, ease: "power2.inOut" }, "<")
      .to(bottomLineRef.current, { rotate: -45, y: -7, width: "32px", duration: 0.35, ease: "power2.inOut" }, "<");
  }, []);

  // ── Scroll: hide burger on scroll-down (mobile), add blur to desktop bar ──
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowBurger(y <= lastY || y < 10);
      setScrolled(y > 20);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracker (desktop underline) ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          DESKTOP NAV — always visible horizontal top bar
          Hidden on mobile via "hidden md:flex"
      ══════════════════════════════════════════════════ */}
      <header
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 lg:px-16 h-20 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "blur(0px)",
          background: scrolled
            ? "rgba(0,0,0,0.55)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        {/* Logo / Brand */}
        <Link
          to="home"
          smooth
          duration={1200}
          className="cursor-pointer flex items-center gap-2.5 group"
        >
          <img
            src="/images/as-icon.png"
            alt="AS"
            className="w-10 h-10 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.12))" }}
          />
          <span className="text-white/70 text-[14px] tracking-[0.3em] uppercase font-amiamie group-hover:text-white/90 transition-colors duration-300">
            Avanish Singh
          </span>
        </Link>

        {/* Centre nav links */}
        <nav className="flex items-center gap-8 lg:gap-10">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              offset={0}
              duration={1600}
              className="relative cursor-pointer text-[13px] tracking-[0.25em] uppercase font-amiamie transition-colors duration-300 group"
              style={{
                color: activeSection === section ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
              }}
            >
              {section}
              {/* active underline */}
              <span
                className="absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-400"
                style={{ width: activeSection === section ? "100%" : "0%" }}
              />
              {/* hover underline */}
              <span className="absolute -bottom-0.5 left-0 h-px bg-white/40 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right CTA — GET IN TOUCH + DISCOVERY CALL */}
        <div className="flex items-center gap-4">
          <Link
            to="contact"
            smooth
            duration={1500}
            className="cursor-pointer border border-white/30 text-white/80 hover:text-white hover:border-white/70 hover:bg-white/5 px-6 py-2.5 text-[13px] tracking-[0.3em] uppercase font-amiamie transition-all duration-300"
          >
            GET IN TOUCH
          </Link>

          {/* DISCOVERY CALL → Calendly */}
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center gap-2 border border-white/30 text-white/80 hover:text-white hover:border-white/70 hover:bg-white/5 px-5 py-2 text-[13px] tracking-[0.3em] uppercase font-amiamie transition-all duration-300 group"
          >
            Discovery Call
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[11px]">
              ↗
            </span>
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          MOBILE SLIDE-OUT PANEL
          Only rendered / shown on screens < md
      ══════════════════════════════════════════════════ */}
      <nav
        ref={mobileNavRef}
        className="md:hidden fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 overflow-y-auto"
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="flex flex-col text-5xl gap-y-2">
          {navLinks.map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer hover:text-white"
                to={section}
                smooth
                offset={0}
                duration={1500}
                onClick={toggleMenu}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              ioavanish@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Let's Build</p>
            <Link
              to="contact"
              smooth
              offset={0}
              duration={1500}
              onClick={toggleMenu}
              className="text-xl tracking-widest uppercase cursor-pointer hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              GET IN TOUCH
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-white/50">Book a Session</p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="text-xl tracking-widest uppercase cursor-pointer hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              DISCOVERY CALL
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          MOBILE HAMBURGER BUTTON
          Hidden on desktop via "md:hidden"
      ══════════════════════════════════════════════════ */}
      <div
        className="md:hidden fixed z-50 flex flex-col items-center justify-center gap-[5px] transition-all duration-500 cursor-pointer top-5 right-5"
        onClick={toggleMenu}
        style={{
          opacity: showBurger ? 1 : 0,
          pointerEvents: showBurger ? "auto" : "none",
          transform: showBurger ? "scale(1)" : "scale(0.8)",
        }}
        title={isOpen ? "Close menu" : "Open menu"}
      >
        {/* Decorative ring */}
        <div
          className="absolute rounded-full border border-white/25 transition-all duration-500"
          style={{
            width: "52px",
            height: "52px",
            top: "-10px",
            left: "-10px",
            transform: isOpen ? "rotate(90deg) scale(1.1)" : "rotate(0deg) scale(1)",
          }}
        />
        <span
          ref={topLineRef}
          className="block h-px bg-white origin-center"
          style={{ width: "32px" }}
        />
        <span
          ref={midLineRef}
          className="block h-px bg-white/60 origin-center"
          style={{ width: "20px", alignSelf: "flex-end" }}
        />
        <span
          ref={bottomLineRef}
          className="block h-px bg-white origin-center"
          style={{ width: "32px" }}
        />
      </div>
    </>
  );
};

export default Navbar;
