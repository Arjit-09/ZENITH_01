'use client';

import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '@/data/portfolioData';

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    delivered: 0,
    clients: 0,
    experience: 0,
    engineers: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            const nextCounts: { [key: string]: number } = {};
            STATS.forEach((stat) => {
              nextCounts[stat.id] = Math.floor(eased * stat.target);
            });
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              const finalCounts: { [key: string]: number } = {};
              STATS.forEach((stat) => {
                finalCounts[stat.id] = stat.target;
              });
              setCounts(finalCounts);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <div key={stat.id} className={`stat-item reveal visible delay-${idx}`}>
              <div className="stat-number">
                {counts[stat.id]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
