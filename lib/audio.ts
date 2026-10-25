export const OPENING_AUDIO = {
  src: '/audio/slides/00-opening-intro.mp3',
  filename: '00-opening-intro.mp3',
  label: 'Opening narration',
} as const;

export const SLIDE_AUDIO = [
  { id: 'billboard', label: 'Slide 1 · Prologue', src: '/audio/slides/01-slide-01-prologue.mp3', filename: '01-slide-01-prologue.mp3' },
  { id: 'about', label: 'Slide 2 · About Me', src: '/audio/slides/02-slide-02-about-me.mp3', filename: '02-slide-02-about-me.mp3' },
  { id: 'skills', label: 'Slide 3 · Technical Skills', src: '/audio/slides/03-slide-03-technical-skills.mp3', filename: '03-slide-03-technical-skills.mp3' },
  { id: 'projects', label: 'Slide 4 · Projects', src: '/audio/slides/04-slide-04-projects-missions.mp3', filename: '04-slide-04-projects-missions.mp3' },
  { id: 'honors', label: 'Slide 5 · Certifications', src: '/audio/slides/05-slide-05-certifications.mp3', filename: '05-slide-05-certifications.mp3' },
  { id: 'journey', label: 'Slide 6 · Learning Journey', src: '/audio/slides/06-slide-06-learning-journey.mp3', filename: '06-slide-06-learning-journey.mp3' },
  { id: 'contact', label: 'Slide 7 · Career Goals', src: '/audio/slides/07-slide-07-career-goals.mp3', filename: '07-slide-07-career-goals.mp3' },
] as const;

export type SlideAudio = (typeof SLIDE_AUDIO)[number];

export const MISSING_SLIDE = {
  number: 8,
  label: 'Slide 8 · Contact / Finale',
} as const;
