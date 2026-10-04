import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Mouse position in normalised device coords, shared outside component
const mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;   // -1 → +1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1; // -1 → +1
  });
}

export function Planet(props) {
  const { scene } = useGLTF("/models/butterfly.glb");
  const groupRef = useRef();
  const landedRef = useRef(false); // true once entry animation finishes
  const { viewport } = useThree();

  // ── Entry animation (flies in from off-screen) ──
  useGSAP(() => {
    if (!groupRef.current) return;

    const target = groupRef.current;
    const finalScale = props.scale ?? 2.2;
    const finalPos = { x: 0, y: 0.3, z: 0 };

    // Start: off-screen bottom-left, tiny & rotated
    target.position.set(-8, -6, -3);
    target.rotation.set(0.4, -Math.PI * 0.6, 0.3);
    target.scale.set(finalScale * 0.3, finalScale * 0.3, finalScale * 0.3);

    const tl = gsap.timeline({
      onComplete: () => { landedRef.current = true; },
    });

    // Fly to center
    tl.to(target.position, {
      x: finalPos.x,
      y: finalPos.y,
      z: finalPos.z,
      duration: 2.2,
      ease: "power2.out",
    }, 0);

    tl.to(target.rotation, {
      x: 0,
      y: Math.PI * 0.5,
      z: 0,
      duration: 2.2,
      ease: "power2.out",
    }, 0);

    // Grow to full size
    tl.to(target.scale, {
      x: finalScale,
      y: finalScale,
      z: finalScale,
      duration: 1.8,
      ease: "back.out(1.4)",
    }, 0.2);

    // Settle bob
    tl.to(target.position, { y: finalPos.y + 0.15, duration: 0.35, ease: "power1.out" }, ">-0.1");
    tl.to(target.position, { y: finalPos.y, duration: 0.35, ease: "power1.in" });
    tl.to(target.rotation, { y: 0, duration: 0.5, ease: "power2.inOut" }, "<");
  }, []);

  // ── Per-frame: cursor tracking + wing idle ──
  useFrame((_, delta) => {
    if (!groupRef.current || !landedRef.current) return;
    const g = groupRef.current;

    // Map NDC mouse to world units (using viewport so it scales with camera)
    const targetX = mouse.x * (viewport.width / 2) * 0.7;
    const targetY = mouse.y * (viewport.height / 2) * 0.55;

    // Smooth lerp — lower factor = lazier follow
    const lerp = 1 - Math.pow(0.04, delta); // ~4% per frame at 60fps
    g.position.x += (targetX - g.position.x) * lerp;
    g.position.y += (targetY - g.position.y) * lerp;

    // Tilt into direction of horizontal movement (bank like a real butterfly)
    const dx = targetX - g.position.x;
    g.rotation.z += (-dx * 0.25 - g.rotation.z) * 0.12;

    // Gentle wing-flap oscillation (Z rock)
    g.rotation.z += Math.sin(Date.now() * 0.003) * 0.0015;

    // Slight Y rotation toward movement direction
    g.rotation.y += (dx * 0.3 - g.rotation.y) * 0.06;
  });

  const handleClick = () => {
    const utterance = new SpeechSynthesisUtterance("Welcome");
    utterance.rate = 1;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);

    if (groupRef.current) {
      const s = props.scale ?? 2.2;
      gsap.to(groupRef.current.scale, {
        x: s * 1.15, y: s * 1.15, z: s * 1.15,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onClick={(e) => { e.stopPropagation(); handleClick(); }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/butterfly.glb");
