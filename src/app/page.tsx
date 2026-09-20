'use client';

export default function Home() {
  return (
    <main style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden', background: '#000000', margin: 0, padding: 0 }}>
      <iframe
        src="/portfolio.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="ZENITH — ML/AI Engineering Collective"
      />
    </main>
  );
}
