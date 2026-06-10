'use client';

import Image from '@/components/AppImage';

export default function MidwhereCharacter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
      <a
        href="https://midwhereah.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          transition: 'transform 200ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Image
          src="/images/mwalogo.png"
          alt="MidWhereAh Character"
          width={300}
          height={300}
          style={{
            width: '300px',
            height: '300px',
            filter: 'drop-shadow(0 0 30px rgba(117, 60, 171, 0.6))',
            borderRadius: '50%',
          }}
        />
      </a>
      <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>click on me to view MidWhereAh</p>
    </div>
  );
}
