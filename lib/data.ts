export const PROFILE = {
  name: 'Naruto Uzumaki',
  realName: 'Medisetti Prudhvi',
  first: 'PRUDHVI',
  last: 'MEDISETTI',
  title: 'NARUTO',
  subtitle: 'UNLEASHED',
  role: 'Full-Stack Developer | AI Developer | Web Developer | Problem Solver',
  summary:
    'Computer Science and Engineering student passionate about full-stack engineering, web development, and artificial intelligence. Driven by the Will of Fire — solving complex problems and engineering scalable applications with Python, React, and Node.js.',
  email: 'pardhupavan457@gmail.com',
  phone: '+91 8125421544',
  github: 'https://github.com/prudhvi-medisetti',
  linkedin: 'https://www.linkedin.com/in/prudhvi-medisetti-43670032b/',
  resume: '/resume.pdf',
};

export type ProfileId = 'recruiter' | 'developer' | 'hackathon' | 'browsing';
export const VIEWERS: { id: ProfileId; name: string; color: string; icon: 'eye' | 'kunai' | 'leaf' | 'shuriken'; line: string }[] = [
  { id: 'recruiter', name: 'Recruiter', color: '#ff5500', icon: 'eye', line: 'Looking for your next full-stack developer? Explore verified projects and skills.' },
  { id: 'developer', name: 'Developer', color: '#2f6fed', icon: 'kunai', line: 'Fellow developer — check out the project repositories and architecture.' },
  { id: 'hackathon', name: 'Collaborator', color: '#f5b301', icon: 'shuriken', line: 'Need a developer who builds fast and solves hard problems? Let’s connect.' },
  { id: 'browsing', name: 'Just Browsing', color: '#1db954', icon: 'leaf', line: 'Enjoy the experience. Scroll down to explore the journey.' },
];

// Subtitles shown while the hero "plays"
export const SUBTITLES: { from: number; to: number; text: string; sfx?: boolean }[] = [
  { from: 0.05, to: 0.22, text: 'I never go back on my word. That is my ninja way.' },
  { from: 0.22, to: 0.38, text: 'Channeling relentless energy into full-stack architectures & AI.' },
  { from: 0.38, to: 0.55, text: 'From shadow clones of code to scalable production systems.' },
  { from: 0.55, to: 0.72, text: 'Every challenge conquered with discipline and the Will of Fire.' },
  { from: 0.72, to: 0.905, text: 'Full-Stack & AI Developer. Believe it!' },
];

export const STATS = [
  { value: 4, suffix: '+', label: 'Core Projects' },
  { value: 8, suffix: '', label: 'Certifications' },
  { value: 7, suffix: '.91', label: 'B.Tech CGPA' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

export const TOP10 = [
  { name: 'Python', genre: 'Language', hue: 48 },
  { name: 'React', genre: 'Frontend', hue: 195 },
  { name: 'Node.js', genre: 'Backend', hue: 120 },
  { name: 'Express.js', genre: 'Backend', hue: 30 },
  { name: 'JavaScript', genre: 'Language', hue: 45 },
  { name: 'MongoDB', genre: 'Database', hue: 140 },
  { name: 'Artificial Intelligence', genre: 'Core', hue: 0 },
  { name: 'Data Structures', genre: 'Core', hue: 215 },
  { name: 'C++', genre: 'Language', hue: 200 },
  { name: 'Java', genre: 'Language', hue: 12 },
];

export const SKILL_GENRES = [
  { name: 'Programming Languages', items: ['Python', 'Java', 'C', 'C++'] },
  { name: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js'] },
  { name: 'Databases & Tools', items: ['MongoDB', 'Git', 'GitHub', 'Visual Studio Code', 'Vercel'] },
  { name: 'Other Areas', items: ['Data Structures', 'Artificial Intelligence'] },
];

export const EPISODES = [
  {
    id: 'levelup-ai',
    ep: 1,
    name: 'LEVELUP-AI — AI Gamified Learning Platform',
    tagline: 'Adaptive learning paths with real-time feedback.',
    still: '/stills/masked.jpg',
    tint: '#e50914',
    rank: 'Featured',
    match: 99,
    url: 'https://github.com/prudhvi-medisetti/Gamified-Ai-learning-website-LEVELUP-AI',
    desc: 'An AI-powered gamified learning platform that provides adaptive learning paths, real-time personalized feedback, and intelligent difficulty scaling to make education engaging and effective.',
    genres: ['AI', 'EdTech', 'Machine Learning'],
    tech: ['Python', 'Machine Learning', 'AI', 'Web Development'],
  },
  {
    id: 'farme2connect',
    ep: 2,
    name: 'FARME2Connect',
    tagline: 'Connecting agriculture directly to opportunities.',
    still: '/stills/face.jpg',
    tint: '#2f6fed',
    rank: 'Featured',
    match: 98,
    url: 'https://github.com/prudhvi-medisetti/farm2connect',
    desc: 'A dedicated platform connecting farmers with vital agricultural resources, suppliers, and direct market access. Built as a collaborative project focused on practical real-world impact and usability.',
    genres: ['Full-Stack', 'E-Commerce', 'AgriTech'],
    tech: ['Full-Stack', 'JavaScript', 'React', 'Node.js', 'Web Development'],
  },
  {
    id: 'ai-proctoring',
    ep: 3,
    name: 'AI-Based Online Proctoring System',
    tagline: 'Computer vision for automated exam monitoring.',
    still: '/stills/kunai.jpg',
    tint: '#f5b301',
    rank: 'Academic',
    match: 96,
    url: 'https://github.com/prudhvi-medisetti/jobmentor',
    desc: 'An academic artificial intelligence and computer vision project engineered for automated online exam monitoring, facial tracking, and real-time anomaly detection.',
    genres: ['Computer Vision', 'AI', 'Academic'],
    tech: ['Python', 'OpenCV', 'AI', 'Computer Vision'],
  },
  {
    id: 'pollution-game',
    ep: 4,
    name: 'Smart Game for Pollution Reduction',
    tagline: 'Interactive environmental awareness through play.',
    still: '/stills/pull.jpg',
    tint: '#1db954',
    rank: 'Interactive',
    match: 95,
    url: '#',
    desc: 'An interactive educational web game designed to inspire environmental awareness, sustainable habits, and pollution reduction through engaging gameplay mechanics.',
    genres: ['Game Development', 'Education', 'Environmental'],
    tech: ['JavaScript', 'HTML5', 'Game Development', 'Web'],
  },
];

export const AWARDS = [
  { laurel: 'ACADEMIC EXCELLENCE', title: '7.91 CGPA', sub: 'B.Tech in Computer Science & Engineering' },
  { laurel: 'TECHNICAL ARSENAL', title: '8 Verified Certifications', sub: 'IBM, Cisco, Microsoft, Pearson' },
  { laurel: 'PROJECT INNOVATION', title: '4 Core Applications', sub: 'AI, Full-Stack, Computer Vision & Games' },
];

export const CERTS = [
  { by: 'IBM SkillsBuild', title: 'AI and Emerging Technologies', hue: 215 },
  { by: 'Cisco Networking Academy', title: 'C Essentials', hue: 200 },
  { by: 'Cisco Networking Academy', title: 'HTML Course', hue: 20 },
  { by: 'Cisco Networking Academy', title: 'CSS Course', hue: 205 },
  { by: 'Cisco Networking Academy', title: 'JavaScript Essentials 1', hue: 45 },
  { by: 'Cisco Networking Academy', title: 'JavaScript Essentials 2', hue: 50 },
  { by: 'Certiport · Pearson VUE', title: 'Information Technology Specialist — HTML & CSS', hue: 0 },
  { by: 'Microsoft', title: 'Microsoft Office Specialist (MOS)', hue: 270 },
];

export const SEASONS = [
  {
    label: 'Undergraduate',
    name: 'Engineering Arc',
    years: '2022 – 2026',
    episodes: [
      {
        title: 'B.Tech in Computer Science and Engineering',
        where: 'Aditya College of Engineering & Technology',
        note: 'CGPA 7.91 · Focused on Full-Stack Development, Artificial Intelligence & Data Structures',
        still: '/stills/vest.jpg',
      },
    ],
  },
];
