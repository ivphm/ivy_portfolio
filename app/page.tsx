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
    <div className="min-h-screen bg-white">
      <Navbar onScrollTo={scrollTo} />

      {/* Hero */}
      <section className="flex items-center justify-center" style={{ height: '100vh' }}>
        <Image
          src="/images/full_logo.png"
          alt="Ivy Pham"
          width={800}
          height={300}
          className="object-contain w-full max-w-2xl px-8"
          priority
        />
      </section>

      {/* About */}
      <section ref={aboutRef} className="px-12 py-16 scroll-mt-16" id="about">
        <ImageHeader src="/images/aboutmeheader.png" alt="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-col md:flex-row gap-12 items-start"
        >
          <Image
            src="/images/camera.png"
            alt="Ivy"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full md:w-[520px] flex-shrink-0"
            style={{ maxHeight: '500px' }}
          />
          <p className="text-base leading-relaxed whitespace-pre-line">{`Xin chào!

I'm Ivy! I'm originally from Vietnam, but I was born in Malaysia and grew up in Switzerland and Singapore.

I'm an aspiring designer fueled by iced matcha lattes and a strong belief that good design can change the world (or at least make it a little smarter).

I'm currently studying Design and Artificial Intelligence at the Singapore University of Technology and Design, with minors in Design, Technology and Society and Computer Science.

Always curious and chasing new things to learn, I have explored designing an autonomous car from scratch, developed an AI that helps people design more intuitively, and geeked out over the latest technologies.

When I'm not sketching ideas or drowning in assignments, you can catch me sprinting across a football pitch, diving for a volleyball (gracefully), or hunting down photo spots with my friends.`}</p>
        </motion.div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="px-12 py-16 scroll-mt-16" id="projects">
        <ImageHeader src="/images/projectsheader.png" alt="Projects" />
        <div className="mt-6">
          <ProjectGrid />
        </div>
      </section>

      {/* Experience */}
      <section ref={experienceRef} className="px-12 py-16 scroll-mt-16" id="experience">
        <ImageHeader src="/images/experienceheader.png" alt="Experience" />
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="text-xl font-medium">Resume:</span>
          <a
            href="https://drive.google.com/file/d/1KRUVdhTaI7uOW8bqGl8aOEwNfoHvWiti/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#144A91] text-white rounded-xl hover:opacity-90 transition-opacity text-sm font-medium"
          >
            📄 View Resume
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/resume.png"
            alt="Resume"
            width={800}
            height={600}
            className="object-contain w-full max-w-3xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
