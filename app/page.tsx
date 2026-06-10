"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ImageHeader from "@/components/ImageHeader";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloralOverlay from "@/components/FloralOverlay";

export default function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutImageRef, { once: true, margin: '-120px' });

  const scrollTo = (section: string) => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      about: aboutRef,
      projects: projectsRef,
      experience: experienceRef,
    };
    map[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [pageHovered, setPageHovered] = useState(false);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
      onMouseEnter={() => setPageHovered(true)}
      onMouseLeave={() => setPageHovered(false)}
    >
      <Navbar onScrollTo={scrollTo} />

      {/* Scroll gradient overlay — fades content at top (below navbar) and bottom of viewport */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 40,
          opacity: pageHovered ? 1 : 0,
          transition: "opacity 400ms ease",
          background: `
            linear-gradient(to top,   rgba(255,255,255,0.6) 0px, rgba(255,255,255,0) 80px)
          `,
        }}
      />

      {/* Hero — full viewport height, logo centred */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/full_logo.png"
          alt="Ivy Pham"
          width={800}
          height={300}
          style={{
            objectFit: "contain",
            width: "100%",
            maxWidth: "800px",
            padding: "0 32px",
          }}
          priority
        />
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        id="about"
        className="section-pad"
        style={{ scrollMarginTop: "64px" }}
      >
        <ImageHeader src="/images/aboutmeheader.png" alt="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="about-content"
        >
          {/* Image with florals in side white space */}
          <div className="about-image-row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <div className="floral-side" style={{ display: "flex", justifyContent: "flex-end", paddingTop: "20px" }}>
              <FloralOverlay side="left" inView={aboutInView} />
            </div>
            <div ref={aboutImageRef}>
              <Image
                src="/images/camera.png"
                alt="Ivy"
                width={600}
                height={500}
                className="about-image"
              />
            </div>
            <div className="floral-side" style={{ display: "flex", justifyContent: "flex-start", paddingTop: "20px" }}>
              <FloralOverlay side="right" inView={aboutInView} />
            </div>
          </div>

          {/* Text centered below image */}
          <div className="about-text" style={{ fontSize: "16px", lineHeight: "2", textAlign: "center", maxWidth: "720px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>Xin chào!</p>
            <p>I&apos;m Ivy! I&apos;m from Vietnam, studying <span style={{ fontWeight: 600, color: "#144A91" }}>Design and Artificial Intelligence</span> at the Singapore University of Technology and Design, with minors in DTS (Design, Technology and Society) and Computer Science.</p>
            <p>I&apos;m an aspiring <span style={{ fontWeight: 600, color: "#144A91" }}>UI/UX Engineer</span> fueled by Chagee and a strong belief that good design can change the world (or at least make it a little smarter).</p>
            <p>When I&apos;m not ideating or drowning in code, you can find me sprinting across a football pitch, whacking a pickleball (gracefully), or hunting down the best matcha lattes.</p>
            <p>Have fun exploring my work!</p>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        id="projects"
        className="section-pad"
        style={{ scrollMarginTop: "64px" }}
      >
        <ImageHeader src="/images/projectsheader.png" alt="Projects" />
        <div style={{ marginTop: "20px" }}>
          <ProjectGrid />
        </div>
      </section>

      {/* Experience */}
      <section
        ref={experienceRef}
        id="experience"
        className="section-pad"
        style={{ scrollMarginTop: "64px" }}
      >
        <ImageHeader src="/images/experienceheader.png" alt="Experience" />
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        ></div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/resume.png"
            alt="Resume"
            width={800}
            height={600}
            style={{ objectFit: "contain", width: "100%", maxWidth: "800px" }}
          />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
