'use client';

import { motion } from 'framer-motion';
import Image from '@/components/AppImage';
import { FaInstagram, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

const socials = [
  { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/ivphm/' },
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/ivphm' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ivyphamtcg/' },
  { icon: FaGoogle, label: 'Gmail', url: 'mailto:ivyphamtcg@gmail.com' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 flex flex-col items-center gap-6"
    >
      <Image src="/images/logo.png" alt="Logo" width={180} height={60} className="object-contain" />
      <div className="flex items-center gap-6">
        {socials.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[#144A91] hover:opacity-75 transition-opacity"
          >
            <Icon size={20} />
            <span className="text-xs text-black">{label}</span>
          </a>
        ))}
      </div>
    </motion.footer>
  );
}
