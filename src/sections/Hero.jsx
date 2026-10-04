import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-label", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
    });

    tl.from(".hero-tagline", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6");

    tl.from(".status-item", {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.8");
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen max-h-screen overflow-hidden"
    >
      {/* ── Layer 0: Background Video (dark mode) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: "brightness(0.45) contrast(1.1) saturate(0.8)",
        }}
        src="/bg-web.mp4"
      />

      {/* ── Layer 1: Dark gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ── Layer 2: Very subtle ghost name (pure texture, not readable) ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-[2]"
        style={{ opacity: 0.08 }}
      >
        <h1 className="font-serif text-[28vw] leading-none uppercase text-white tracking-tighter whitespace-nowrap">

        </h1>
        <h1 className="font-serif text-[28vw] leading-none uppercase text-white tracking-tighter whitespace-nowrap -mt-[8vw]">

        </h1>
      </div>



      {/* ── Layer 4b: Center editorial headline ── */}
      <div className="relative z-[10] flex flex-col items-center justify-center text-center px-4 pointer-events-none" style={{ gap: 0 }}>
        <p className="hero-label font-amiamie text-white/70 text-[10px] sm:text-[11px] tracking-[0.35rem] uppercase">
          AS &nbsp;–&nbsp; EST.2014
        </p>
        {/* Row 1 – "solving BUSINESS PROBLEMS" mixed weight */}
        <div className="hero-tagline flex items-baseline justify-center" style={{ gap: "0.6vw", lineHeight: 1 }}>
          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(0.75rem, 1.6vw, 1.25rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.01em",
            marginBottom: "0.3em",
          }}>
            solving
          </span>
          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.6rem, 4.5vw, 5rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            BUSINESS
          </span>

          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(0.75rem, 1.6vw, 1.25rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.01em",
            marginBottom: "0.3em",
          }}>
            problems

          </span>
        </div>

        {/* Row 2 – "WITH THE MIGHT" full bold */}
        <div className="hero-tagline" style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.6rem, 4.5vw, 5rem)",
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}>
          WITH THE MIGHT
        </div>

        {/* Row 3 – "of CREATIVE INSIGHT!" mixed weight */}
        <div className="hero-tagline flex items-baseline justify-center" style={{ gap: "0.6vw", lineHeight: 1 }}>
          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(0.75rem, 1.6vw, 1.25rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.01em",
            marginBottom: "0.3em",
          }}>
            of
          </span>
          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.6rem, 4.5vw, 5rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            CREATIVE INSIGHT!
          </span>
        </div>

      </div>

      {/* ── Layer 5: Bottom full-width status bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none">
        <div className="flex items-center justify-between px-8 sm:px-12 py-5">
          {/* Left: scroll hint */}
          <p className="status-item font-amiamie text-white/50 text-[9px] sm:text-[10px] tracking-[0.3rem] uppercase">
            Scroll to discover ↓
          </p>

          {/* Right: time */}
          <p className="status-item font-amiamie text-white/50 text-[9px] sm:text-[10px] tracking-[0.25rem] uppercase text-right">
            Local Time <br />
            {time} GMT+5:30
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
