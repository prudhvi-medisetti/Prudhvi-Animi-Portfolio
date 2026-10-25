'use client';

import { useEffect, useRef, useState } from 'react';
import { OPENING_AUDIO, SLIDE_AUDIO, type SlideAudio } from '@/lib/audio';

export default function SlideNarration() {
  const audio = useRef<HTMLAudioElement>(null);
  const activeSlide = useRef<SlideAudio>(SLIDE_AUDIO[0]);
  const currentSlide = useRef<SlideAudio>(SLIDE_AUDIO[0]);
  const unlocked = useRef(false);
  const openingFinished = useRef(false);
  const requestId = useRef(0);
  const [slide, setSlide] = useState<SlideAudio>(SLIDE_AUDIO[0]);

  const stop = () => {
    const player = audio.current;
    if (!player) return;
    player.pause();
    player.currentTime = 0;
    player.removeAttribute('src');
    player.load();
  };

  const playFile = (src: string, id: number) => {
    const player = audio.current;
    if (!player || !unlocked.current || id !== requestId.current) return;
    player.src = src;
    player.load();
    const start = () => {
      if (id !== requestId.current || !unlocked.current) return;
      void player.play().catch(() => undefined);
    };
    if (player.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) start();
    else player.addEventListener('canplay', start, { once: true });
  };

  const playSlide = (nextSlide: SlideAudio) => {
    const id = ++requestId.current;
    stop();
    playFile(nextSlide.src, id);
  };

  const unlock = () => {
    unlocked.current = true;
    const player = audio.current;
    if (!player) return;
    if (!openingFinished.current && player.currentSrc.endsWith(OPENING_AUDIO.src)) {
      if (player.paused) void player.play().catch(() => undefined);
      return;
    }
    playSlide(activeSlide.current);
  };

  useEffect(() => {
    let raf = 0;
    const updateSlide = () => {
      const mid = window.innerHeight * 0.45;
      let active: SlideAudio = SLIDE_AUDIO[0];
      SLIDE_AUDIO.forEach((candidate) => {
        const element = document.getElementById(candidate.id);
        if (element && element.getBoundingClientRect().top <= mid) active = candidate;
      });
      setSlide((previous) => (previous.id === active.id ? previous : active));
      raf = requestAnimationFrame(updateSlide);
    };
    raf = requestAnimationFrame(updateSlide);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    activeSlide.current = slide;
    if (!openingFinished.current && !unlocked.current) return;
    if (unlocked.current) playSlide(slide);
  }, [slide]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const player = audio.current;
    if (!player) return;

    const onEnded = () => {
      if (player.currentSrc.endsWith(OPENING_AUDIO.src)) {
        openingFinished.current = true;
        if (unlocked.current) playSlide(activeSlide.current);
      }
    };
    const onUnlock = () => unlock();

    player.src = OPENING_AUDIO.src;
    player.load();
    void player.play().catch(() => undefined);
    player.addEventListener('ended', onEnded);
    window.addEventListener('portfolio-audio-unlock', onUnlock);
    window.addEventListener('pointerdown', onUnlock);
    window.addEventListener('keydown', onUnlock);

    return () => {
      ++requestId.current;
      player.pause();
      player.removeEventListener('ended', onEnded);
      window.removeEventListener('portfolio-audio-unlock', onUnlock);
      window.removeEventListener('pointerdown', onUnlock);
      window.removeEventListener('keydown', onUnlock);
      stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <audio ref={audio} preload="metadata" aria-hidden="true" />;
}
