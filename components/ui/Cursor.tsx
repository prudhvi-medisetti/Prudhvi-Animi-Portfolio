'use client';

import { useEffect, useRef } from 'react';

/** Shinchan image cursor with a subtle lagging trail. */
export default function Cursor() {
  const character = useRef<HTMLImageElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.documentElement.classList.add('has-cursor');
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let hot = false;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      hot = (event.target as HTMLElement).closest('a, button, [data-hot]') !== null;
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      const vx = x - rx;
      const vy = y - ry;
      const speed = Math.min(1, Math.hypot(vx, vy) / 120);
      const angle = Math.atan2(vy, vx);

      if (character.current) {
        character.current.style.transform = `translate3d(${x + 8}px, ${y + 8}px, 0) scale(${hot ? 1.12 : 1})`;
        character.current.classList.toggle('hot', hot);
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) rotate(${angle}rad) scale(${(hot ? 1.9 : 1) * (1 + speed * 0.6)}, ${(hot ? 1.9 : 1) * (1 - speed * 0.35)})`;
        ring.current.classList.toggle('hot', hot);
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', move);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <img className="cur-character" ref={character} src="/assets/shinchan_cursor.png" alt="" aria-hidden />
      <div className="cur-ring" ref={ring} aria-hidden />
    </>
  );
}
