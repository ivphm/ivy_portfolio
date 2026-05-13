'use client';

import Image from 'next/image';

export default function LuvaCharacter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
      <a
        href="https://luva.fameline-apsg.com/"
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
          src="/images/luva.gif"
          alt="LUVA Character"
          width={300}
          height={330}
          style={{
            width: '300px',
            height: '330px',
            filter: 'drop-shadow(0 0 30px rgba(16, 231, 159, 0.6))',
            borderRadius: '50%',
          }}
        />
      </a>
      <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>click on me to view Luva</p>
    </div>
  );
}
