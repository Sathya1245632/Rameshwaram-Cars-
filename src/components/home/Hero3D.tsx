"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, ShieldCheck } from "lucide-react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect mobile device to tune geometry density and avoid throttling
    const isMobile = window.innerWidth < 768;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e273c, 0.0018);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    camera.position.set(0, 18, 55);

    // 3. WebGL Renderer with Alpha & Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Lighting: Golden Hour Coastal Sunrise & Ambient Sea Blue
    const ambientLight = new THREE.AmbientLight(0x193b5c, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffbe6b, 3.2);
    sunLight.position.set(40, 35, -70);
    scene.add(sunLight);

    const seaFillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    seaFillLight.position.set(-30, 20, 30);
    scene.add(seaFillLight);

    // 5. Sunrise Sun Disc
    const sunGeo = new THREE.SphereGeometry(7, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd17a });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(40, 26, -110);
    scene.add(sunMesh);

    // Glowing Sun Halo
    const haloGeo = new THREE.RingGeometry(7.2, 22, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.28,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.copy(sunMesh.position);
    haloMesh.position.z += 0.5;
    scene.add(haloMesh);

    // 6. Pamban Ocean Water Surface (Displaced Plane Grid)
    // 28x28 on mobile for silky 60fps; 56x56 on desktop
    const segments = isMobile ? 28 : 56;
    const oceanGeo = new THREE.PlaneGeometry(240, 240, segments, segments);
    oceanGeo.rotateX(-Math.PI / 2);

    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x072b45,
      roughness: 0.15,
      metalness: 0.8,
      flatShading: true,
      transparent: true,
      opacity: 0.94,
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    oceanMesh.position.y = -2;
    scene.add(oceanMesh);

    // Original vertex heights cache for procedural wave oscillation
    const posAttr = oceanGeo.attributes.position;
    const originalY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      originalY[i] = posAttr.getY(i);
    }

    // 7. Architectural Pamban Sea Bridge Model Construction
    const bridgeGroup = new THREE.Group();

    // Bridge Deck (Concrete rail & road viaduct across the sea)
    const deckGeo = new THREE.BoxGeometry(220, 1.2, 5.5);
    const deckMat = new THREE.MeshStandardMaterial({ color: 0xd4d8dc, roughness: 0.6 });
    const deckMesh = new THREE.Mesh(deckGeo, deckMat);
    deckMesh.position.set(0, 3.8, -12);
    bridgeGroup.add(deckMesh);

    // Bridge Railings
    const railGeo = new THREE.BoxGeometry(220, 0.4, 0.2);
    const railMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 }); // Safety Gold/Amber
    const railLeft = new THREE.Mesh(railGeo, railMat);
    railLeft.position.set(0, 4.8, -14.6);
    bridgeGroup.add(railLeft);
    const railRight = new THREE.Mesh(railGeo, railMat);
    railRight.position.set(0, 4.8, -9.4);
    bridgeGroup.add(railRight);

    // Massive Concrete Piers sunk in deep ocean
    const pierGeo = new THREE.CylinderGeometry(1.6, 2.0, 10, 16);
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    for (let x = -100; x <= 100; x += 18) {
      const pier = new THREE.Mesh(pierGeo, pierMat);
      pier.position.set(x, -0.8, -12);
      bridgeGroup.add(pier);
    }

    // Cantilever Scissors Truss (Center Scherzer rolling lift span)
    const trussMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.6 });
    const trussGroup = new THREE.Group();

    // Steel Arch Trusses
    const archPillarGeo = new THREE.BoxGeometry(0.8, 14, 0.8);
    const p1 = new THREE.Mesh(archPillarGeo, trussMat);
    p1.position.set(-14, 10.5, -14.5);
    p1.rotation.z = -0.15;
    trussGroup.add(p1);

    const p2 = new THREE.Mesh(archPillarGeo, trussMat);
    p2.position.set(14, 10.5, -14.5);
    p2.rotation.z = 0.15;
    trussGroup.add(p2);

    const p3 = new THREE.Mesh(archPillarGeo, trussMat);
    p3.position.set(-14, 10.5, -9.5);
    p3.rotation.z = -0.15;
    trussGroup.add(p3);

    const p4 = new THREE.Mesh(archPillarGeo, trussMat);
    p4.position.set(14, 10.5, -9.5);
    p4.rotation.z = 0.15;
    trussGroup.add(p4);

    // Top Truss Cross Beam
    const topTrussGeo = new THREE.BoxGeometry(30, 0.8, 5.8);
    const topBeam = new THREE.Mesh(topTrussGeo, trussMat);
    topBeam.position.set(0, 17.5, -12);
    trussGroup.add(topBeam);

    // Diagonal Bracing Struts
    const diagGeo = new THREE.BoxGeometry(20, 0.5, 0.5);
    const d1 = new THREE.Mesh(diagGeo, trussMat);
    d1.position.set(0, 10.5, -14.5);
    d1.rotation.z = 0.42;
    trussGroup.add(d1);

    const d2 = new THREE.Mesh(diagGeo, trussMat);
    d2.position.set(0, 10.5, -14.5);
    d2.rotation.z = -0.42;
    trussGroup.add(d2);

    bridgeGroup.add(trussGroup);
    scene.add(bridgeGroup);

    // 8. Express Coastal Train / Tourist Safari Coach travelling on Pamban Bridge
    const trainGroup = new THREE.Group();
    const engineGeo = new THREE.BoxGeometry(7, 3, 2.8);
    const engineMat = new THREE.MeshStandardMaterial({ color: 0x123b56, roughness: 0.3 }); // Navy blue coach
    const engineMesh = new THREE.Mesh(engineGeo, engineMat);
    engineMesh.position.y = 1.6;
    trainGroup.add(engineMesh);

    // Coach Roof (Sand Gold livery)
    const roofGeo = new THREE.BoxGeometry(7.2, 0.5, 3);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xd5ad65, roughness: 0.3 });
    const roofMesh = new THREE.Mesh(roofGeo, roofMat);
    roofMesh.position.y = 3.2;
    trainGroup.add(roofMesh);

    // Coach Windows
    const winGeo = new THREE.BoxGeometry(1.2, 0.9, 0.1);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let wx = -2.2; wx <= 2.2; wx += 1.8) {
      const w1 = new THREE.Mesh(winGeo, winMat);
      w1.position.set(wx, 1.8, 1.45);
      trainGroup.add(w1);
      const w2 = new THREE.Mesh(winGeo, winMat);
      w2.position.set(wx, 1.8, -1.45);
      trainGroup.add(w2);
    }

    // Headlight
    const headlight = new THREE.PointLight(0xfffbeb, 2, 25);
    headlight.position.set(3.8, 1.5, 0);
    trainGroup.add(headlight);

    trainGroup.position.set(-60, 4.4, -12);
    scene.add(trainGroup);

    // 9. Coastal Fishing Catamarans / Pilgrimage Boats in bay
    const boatGroup = new THREE.Group();
    const boatHullGeo = new THREE.ConeGeometry(1.6, 5.5, 4);
    boatHullGeo.rotateX(Math.PI / 2);
    const boatMat = new THREE.MeshStandardMaterial({ color: 0xfffbeb, roughness: 0.5 });
    const boat1 = new THREE.Mesh(boatHullGeo, boatMat);
    boat1.position.set(-25, -1.2, 14);
    boat1.rotation.y = 0.4;
    boatGroup.add(boat1);

    const boat2 = new THREE.Mesh(boatHullGeo, boatMat);
    boat2.position.set(35, -1.2, 8);
    boat2.rotation.y = -0.8;
    boatGroup.add(boat2);
    scene.add(boatGroup);

    // 10. Ambient Floating Sea Mist / Golden Dust Particles
    const particleCount = isMobile ? 80 : 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePos[p] = (Math.random() - 0.5) * 140;
      particlePos[p + 1] = Math.random() * 30 + 1;
      particlePos[p + 2] = (Math.random() - 0.5) * 100;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffe29a,
      size: 0.45,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 11. Mouse interaction tracking
    let targetCameraX = 0;
    let targetCameraY = 18;

    const handleMouseMove = (event: MouseEvent) => {
      const normX = (event.clientX / window.innerWidth) * 2 - 1;
      const normY = -(event.clientY / window.innerHeight) * 2 + 1;
      targetCameraX = normX * 8;
      targetCameraY = 18 + normY * 4;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 12. Animation Loop with Viewport Visibility Observer (Saves CPU/Battery)
    let isVisible = true;
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Procedural Ocean Waves Simulation
      const positions = oceanGeo.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const wave =
          Math.sin(x * 0.12 + elapsedTime * 1.5) * 0.6 +
          Math.cos(z * 0.14 + elapsedTime * 1.2) * 0.5;
        positions.setY(i, originalY[i] + wave);
      }
      positions.needsUpdate = true;

      // Animate Coastal Train across the Pamban Bridge
      trainGroup.position.x += 0.18;
      if (trainGroup.position.x > 105) {
        trainGroup.position.x = -105;
      }

      // Gentle boat rock
      boat1.rotation.z = Math.sin(elapsedTime * 1.4) * 0.08;
      boat2.rotation.z = Math.cos(elapsedTime * 1.2) * 0.06;

      // Floating mist drift
      particles.rotation.y = elapsedTime * 0.015;

      // Smooth camera parallax
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 5, -12);

      renderer.render(scene, camera);
    };

    animate();

    // 13. Responsive Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0e273c]">
      {/* Three.js 3D Interactive Canvas Container */}
      <div
        ref={containerRef}
        id="threejs-container-ANIMATION_2"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Elegant Atmospheric Overlay to Guarantee Maximum Text Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/60 to-[#0e273c]/30 pointer-events-none" />

      {/* Editorial Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Curated Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B56]/85 border border-[#D5AD65]/40 text-[#D5AD65] text-xs uppercase tracking-widest font-semibold mb-6 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D5AD65]" />
          <span>Curated Pilgrimages & Coastal Chauffeurs</span>
        </div>

        {/* Bold Editorial Headline with Royal Cinzel Serif */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAF8F3] tracking-wider leading-[1.15] max-w-4xl drop-shadow-lg">
          Discover Rameshwaram. <br />
          <span className="text-[#D5AD65] italic font-normal">Experience the Journey.</span>
        </h1>

        {/* Refined Supporting Body Text with Plus Jakarta Sans */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-slate-200 font-body max-w-2xl leading-relaxed drop-shadow px-2">
          Explore sacred temples, breathtaking coastlines, and unforgettable destinations with thoughtfully planned travel experiences.
        </p>

        {/* Single Clear Gold Action Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="#packages"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Discreet Editorial Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-[#D5AD65] font-bold text-sm">4.9 ★</span>
            <span>1,280+ Reviews</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D5AD65]" />
            <span>Verified Local Drivers</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#D5AD65]" />
            <span>100% Transparent Fixed Rates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
