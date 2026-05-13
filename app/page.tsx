'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ImageHeader from '@/components/ImageHeader';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: string) => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      about: aboutRef,
      projects: projectsRef,
      experience: experienceRef,
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar onScrollTo={scrollTo} />

      {/* Hero — full viewport height, logo centred */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/full_logo.png"
          alt="Ivy Pham"
          width={800}
          height={300}
          style={{ objectFit: 'contain', width: '100%', maxWidth: '800px', padding: '0 32px' }}
          priority
        />
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        id="about"
        style={{ padding: '48px', scrollMarginTop: '64px' }}
      >
        <ImageHeader src="/images/aboutmeheader.png" alt="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
            alignItems: 'flex-start',
          }}
        >
          <Image
            src="/images/camera.png"
            alt="Ivy"
            width={600}
            height={500}
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              width: '600px',
              height: '500px',
              flexShrink: 0,
              marginLeft: '32px',
            }}
          />
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{`Xin chào!

I'm Ivy! I'm originally from Vietnam, but I was born in Malaysia and grew up in Switzerland and Singapore.

I'm an aspiring designer fueled by iced matcha lattes and a strong belief that good design can change the world (or at least make it a little smarter).

I'm currently studying Design and Artificial Intelligence at the Singapore University of Technology and Design, with minors in Design, Technology and Society and Computer Science.

Always curious and chasing new things to learn, I have explored designing an autonomous car from scratch, developed an AI that helps people design more intuitively, and geeked out over the latest technologies.

When I'm not sketching ideas or drowning in assignments, you can catch me sprinting across a football pitch, diving for a volleyball (gracefully), or hunting down photo spots with my friends.`}</p>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        id="projects"
        style={{ padding: '48px', scrollMarginTop: '64px' }}
      >
        <ImageHeader src="/images/projectsheader.png" alt="Projects" />
        <div style={{ marginTop: '20px' }}>
          <ProjectGrid />
        </div>
      </section>

      {/* Experience */}
      <section
        ref={experienceRef}
        id="experience"
        style={{ padding: '48px', scrollMarginTop: '64px' }}
      >
        <ImageHeader src="/images/experienceheader.png" alt="Experience" />
        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <span style={{ fontSize: '20px' }}>Resume:</span>
          <a
            href="https://drive.google.com/file/d/1KRUVdhTaI7uOW8bqGl8aOEwNfoHvWiti/preview"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: '#144A91',
              color: '#fff',
              borderRadius: '12px',
              fontSize: '14px',
              fontFamily: 'inherit',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            📄 View Resume
          </a>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/images/resumev2.png"
            alt="Resume"
            width={800}
            height={600}
            style={{ objectFit: 'contain', width: '100%', maxWidth: '800px' }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
