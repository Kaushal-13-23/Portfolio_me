/**
 * Central portfolio data — generated for Kaushal Kumar Singh.
 * Student Leader | Campus Community Builder | Event Coordinator
 * Presidency University, Bengaluru
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kaushal Kumar Singh',
  displayName: 'Kaushal Kumar Singh',
  firstName: 'KAUSHAL',
  seriesTag: '',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'PRESIDENCY UNIVERSITY • STUDENT LEADERSHIP',
  role: 'Student Leader & Event Coordinator',
  tagline: ['Student Leader', 'Campus Community Builder', 'Event Coordinator'],
  shortBio:
    'Student leader, campus community builder, and President of CogniCore & Metaverse Society Club at Presidency University — leading 58+ university and community events.',
  intro:
    'Third-year BCA student at Presidency University, Bengaluru, serving as President of CogniCore Club & Metaverse Society Club, with experience coordinating 30+ university events and 28+ NSS events across campus.',
  location: 'Bengaluru, Karnataka, India',
  phone: '8797786686',
  email: 'kaushalkumarsingh.7239@gmail.com',
  altEmail: 'KAUSHAL.20241BCA0051@presidencyuniversity.in',
  links: {
    linkedin: 'https://www.linkedin.com/in/kaushal-kr-singh',
    instagram: 'https://www.instagram.com/kaushhh25',
    github: 'https://github.com/Kaushal-13-23',
  },
  resumePdf: '/assets/Kaushal_Kumar_Singh_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Kaushal Kumar Singh',
  },
  interests: ['Campus Community Building', 'Event Strategy & Operations', 'Media & Public Relations', 'Student Leadership'],
};

export const education = [
  {
    school: 'Presidency University, Bengaluru',
    place: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Computer Applications — Presidency School of Information Science',
    period: '2024 – Present (Expected Graduation: 2027)',
    score: 'Third Year (BCA)',
  },
];

export const experience = [
  {
    company: 'CogniCore Club · School of Information Science',
    role: 'President',
    place: 'Presidency University, Bengaluru',
    period: 'August 2026 – Present',
    points: [
      'Lead the CogniCore Club and spearhead student-focused technical and academic initiatives within the School of Information Science.',
      'Coordinate with student members, executive teams, and department faculty to plan and execute high-engagement club activities.',
      'Encourage broad student participation, peer collaboration, and active learning through structured club initiatives and campus events.',
    ],
  },
  {
    company: 'Metaverse Society Club · School of Information Science',
    role: 'President',
    place: 'Presidency University, Bengaluru',
    period: 'January 2025 – Present',
    points: [
      'Lead the Metaverse Society Club and coordinate immersive technology workshops, discussions, and student activities.',
      'Work closely with student teams to design, organize, and execute club events with high student participation.',
      'Promote student involvement in future-tech domains and contribute directly to building an active, enthusiastic campus community.',
    ],
  },
  {
    company: 'Presidency School of Information Science',
    role: 'Student Coordinator',
    place: 'Presidency University, Bengaluru',
    period: 'University Events (30+ Events)',
    points: [
      'Coordinated and supported the flawless execution of 30+ university events, including academic symposiums, guest lectures, and cultural fests.',
      'Collaborated with students, faculty committees, and organizing teams to facilitate smooth event logistics and crowd operations.',
      'Supported comprehensive event planning, cross-department communication, stage management, and student engagement.',
    ],
  },
  {
    company: 'National Service Scheme (NSS)',
    role: 'Student Coordinator',
    place: 'Presidency University, Bengaluru',
    period: 'August 2025 – Present (28+ NSS Events)',
    points: [
      'Serve as Student Coordinator for 28+ NSS social welfare events, community drives, and health initiatives.',
      'Coordinate large volunteer teams during pre-event logistics planning and on-ground execution.',
      'Facilitate student participation, volunteer communication, and on-ground coordination across university and civic venues.',
    ],
  },
  {
    company: 'National Service Scheme (NSS)',
    role: 'Media Head',
    place: 'Presidency University, Bengaluru',
    period: 'November 2024 – August 2026',
    points: [
      'Served as the Media Head for NSS, directing end-to-end media and communication activities for all NSS events.',
      'Created and amplified promotional campaigns to communicate student activities, blood donation drives, and awareness campaigns.',
      'Collaborated with student teams on photography, visual coverage, documentation, and digital outreach.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cognicore-club-presidency',
    title: 'CogniCore Club Presidency',
    year: '2026',
    genre: 'Leadership • Tech Culture • Student Engagement',
    logline: 'Presidential leadership spearheading student-focused technical initiatives and community building across the School of Information Science.',
    stack: ['Student Leadership', 'Team Coordination', 'Event Planning', 'Campus Outreach', 'Public Relations'],
    build: [
      'Leading the CogniCore Club as President at Presidency School of Information Science, orchestrating academic and technical initiatives that bridge faculty, student teams, and peer learning.',
      'Directing member coordination, executive planning, and high-engagement club sessions to drive active student participation across the university.',
    ],
    features: [
      'Strategic club roadmap & semester event calendars',
      'Cross-batch student mentoring & collaborative workshops',
      'End-to-end event planning & execution frameworks',
      'Active campus engagement & member retention initiatives',
      'Direct coordination with School of Information Science leadership',
    ],
    metrics: [
      { value: 'Aug 2026–Pres', label: 'tenure as President' },
      { value: '100%', label: 'student-focused initiatives' },
      { value: 'School of Info Sci', label: 'flagship department club' },
      { value: 'High', label: 'campus participation' },
    ],
    palette: { from: '#1a0826', via: '#531b7d', to: '#090510', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'metaverse-society-club',
    title: 'Metaverse Society Club',
    year: '2025–2026',
    genre: 'Future Tech • Metaverse • Community Building',
    logline: 'Building and scaling an active campus community centered around virtual environments, immersive computing, and future technology trends.',
    stack: ['Community Building', 'Metaverse & Web3 Awareness', 'Team Management', 'Event Planning'],
    build: [
      'Serving as President since January 2025, pioneering student awareness around metaverse ecosystems, spatial computing, and next-generation digital interaction.',
      'Organizing interactive club forums, speaker sessions, and collaborative projects that establish Presidency University as an active hub for future tech enthusiasts.',
    ],
    features: [
      'Curated interactive sessions on immersive tech & digital ecosystems',
      'Student team leadership with delegated operational roles',
      'Active campus community building & awareness drives',
      'Collaboration with tech clubs and university departments',
      'Hands-on demonstrations and peer discussion forums',
    ],
    metrics: [
      { value: 'Jan 2025–Pres', label: 'presidential tenure' },
      { value: 'Future Tech', label: 'metaverse & immersive focus' },
      { value: 'Active', label: 'student community' },
      { value: '100%', label: 'peer-driven collaboration' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'university-events-coordination',
    title: '30+ University Events Coordination',
    year: '2024–2026',
    genre: 'Event Operations • Logistics • Stage Management',
    logline: 'Coordinating and supporting 30+ university-level flagship events, cultural fests, symposiums, and departmental gatherings.',
    stack: ['Event Management', 'Operations Logistics', 'Team Coordination', 'Stage & Crowd Management'],
    build: [
      'Served as Student Coordinator for the Presidency School of Information Science, steering on-ground execution for 30+ university events spanning academic summits, cultural showcases, and student fests.',
      'Facilitated seamless liaison between university faculty, administration, student organizing squads, and external guests with zero operational downtime.',
    ],
    features: [
      'Coordinated 30+ high-impact university events',
      'On-ground crowd, stage, and operational logistics handling',
      'Liaison between faculty, students, and venue management',
      'Real-time troubleshooting and volunteer dispatching',
      'Comprehensive pre-event and post-event operational reporting',
    ],
    metrics: [
      { value: '30+', label: 'university events coordinated' },
      { value: '1,000s', label: 'student attendee reach' },
      { value: '100%', label: 'on-time schedule execution' },
      { value: 'Presidency', label: 'School of Info Science' },
    ],
    palette: { from: '#24060b', via: '#7a0f24', to: '#09070a', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'nss-social-media-leadership',
    title: 'NSS Social Impact & Media Leadership',
    year: '2024–2026',
    genre: 'Social Welfare • NSS Coordination • Media & PR',
    logline: 'Leading 28+ National Service Scheme (NSS) drives and heading media & communications for community outreach across Bengaluru.',
    stack: ['Social Welfare', 'Volunteer Management', 'Media Relations', 'Public Outreach', 'Campaign Promotion'],
    build: [
      'Served as Media Head (Nov 2024 – Aug 2026) and Student Coordinator (Aug 2025 – Present) for NSS Presidency University, spearheading media campaigns and on-ground execution for 28+ social initiatives.',
      'Mobilized student volunteer corps for community outreach, health camps, awareness drives, and civic initiatives while amplifying event reach through digital media channels.',
    ],
    features: [
      'Coordinated 28+ NSS community welfare events',
      'Directed NSS Media & Communication strategies for nearly two years',
      'Spearheaded campus publicity, documentation, and digital coverage',
      'Organized volunteer mobilization and logistics for civic causes',
      'Cross-functional collaboration with university leadership and external NGOs',
    ],
    metrics: [
      { value: '28+', label: 'NSS events coordinated' },
      { value: 'Nov 24–Aug 26', label: 'tenure as Media Head' },
      { value: '500+', label: 'student volunteers mobilized' },
      { value: 'Bengaluru', label: 'city-wide social impact' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'dual-president',
    title: '2× Club President',
    org: 'Presidency University',
    detail: 'Serving concurrently as President of CogniCore Club and President of Metaverse Society Club, driving campus tech culture.',
    laurel: 'Dual Presidency',
  },
  {
    id: 'university-events',
    title: '30+ University Events',
    org: 'School of Information Science',
    detail: 'Student Coordinator delivering end-to-end execution, stage management, and operational logistics for 30+ university events.',
    laurel: 'Event Operations',
  },
  {
    id: 'nss-events',
    title: '28+ NSS Events',
    org: 'Presidency University NSS',
    detail: 'Student Coordinator directing volunteer teams and field operations for 28+ community welfare and social service drives.',
    laurel: 'Social Leadership',
  },
  {
    id: 'media-head',
    title: 'Media Head Leadership',
    org: 'National Service Scheme',
    detail: 'Led NSS Media & Communications from Nov 2024 to Aug 2026, spearheading public communication and event publicity.',
    laurel: 'Media Leadership',
  },
  {
    id: 'community-builder',
    title: 'Campus Community Builder',
    org: 'Presidency University, Bengaluru',
    detail: 'Recognized across campus for building inclusive student networks, mentoring peers, and driving lively campus engagement.',
    laurel: 'Community Pillar',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Presidency University', name: 'President — CogniCore Club (School of Information Science)', link: '#' },
  { issuer: 'Presidency University', name: 'President — Metaverse Society Club (School of Information Science)', link: '#' },
  { issuer: 'Presidency University', name: 'Student Coordinator — 30+ University Events Execution', link: '#' },
  { issuer: 'NSS Presidency', name: 'Student Coordinator — 28+ NSS Community Welfare Events', link: '#' },
  { issuer: 'NSS Presidency', name: 'Media Head — NSS Event Publicity & Digital Communications', link: '#' },
  { issuer: 'Presidency University', name: 'Bachelor of Computer Applications (BCA) — Third Year', link: '#' },
  { issuer: 'Presidency University', name: 'Campus Leadership & Community Building Excellence', link: '#' },
  { issuer: 'Presidency University', name: 'Event Management & Operational Logistics Coordination', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'leadership',
    title: 'Leadership & Management',
    subtitle: 'Steering clubs, teams & operations',
    skills: [
      { name: 'Student Leadership', mono: 'Sl', note: '2× President' },
      { name: 'Team Coordination', mono: 'Tc' },
      { name: 'Event Management', mono: 'Em', note: '58+ Events' },
      { name: 'Community Building', mono: 'Cb' },
      { name: 'Volunteer Management', mono: 'Vm' },
      { name: 'Strategic Planning', mono: 'Sp' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Engagement',
    subtitle: 'Connecting crowds, faculty & peers',
    skills: [
      { name: 'Student Engagement', mono: 'Se', note: 'Campus-wide' },
      { name: 'Public Communication', mono: 'Pc' },
      { name: 'Event Promotion', mono: 'Ep' },
      { name: 'Campus Outreach', mono: 'Co' },
      { name: 'Stage Coordination', mono: 'Sc' },
      { name: 'Stakeholder Liaison', mono: 'Sl' },
    ],
  },
  {
    id: 'media',
    title: 'Media & Creative',
    subtitle: 'Campaigns, storytelling & public voice',
    skills: [
      { name: 'Media Coordination', mono: 'Mc', note: 'Media Head' },
      { name: 'Event Communication', mono: 'Ec' },
      { name: 'Content Promotion', mono: 'Cp' },
      { name: 'Campaign Strategy', mono: 'Cs' },
      { name: 'Digital Documentation', mono: 'Dd' },
      { name: 'Public Relations', mono: 'Pr' },
    ],
  },
  {
    id: 'academic',
    title: 'Academic & Tech Domain',
    subtitle: 'Computer applications & future tech',
    skills: [
      { name: 'Bachelor of Computer Applications', mono: 'BCA', note: '3rd Year' },
      { name: 'Information Science', mono: 'Is' },
      { name: 'Metaverse & Web3 Awareness', mono: 'Mv' },
      { name: 'Operational Logistics', mono: 'Ol' },
      { name: 'Digital Productivity Tools', mono: 'Dp' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Student Leadership': ['President of CogniCore Club', 'President of Metaverse Society Club'],
  'Team Coordination': ['30+ University Events', '28+ NSS Events'],
  'Event Management': ['Coordinated 58+ Total Campus & NSS Events'],
  'Community Building': ['Metaverse Society Club', 'School of Information Science'],
  'Volunteer Management': ['NSS Volunteer Corps (500+ volunteers)'],
  'Strategic Planning': ['Semester event roadmaps for 2 university clubs'],
  'Student Engagement': ['Active participation drives across Presidency University'],
  'Public Communication': ['Faculty liaison & student community briefings'],
  'Event Promotion': ['NSS public awareness campaigns & campus fests'],
  'Campus Outreach': ['28+ NSS social welfare & community drives'],
  'Stage Coordination': ['On-ground stage operations for university fests'],
  'Stakeholder Liaison': ['Liaison between faculty, student committees & guests'],
  'Media Coordination': ['Media Head — NSS (Nov 2024 – Aug 2026)'],
  'Event Communication': ['Multi-channel communication for 58+ events'],
  'Content Promotion': ['Digital campaigns & social outreach for campus fests'],
  'Campaign Strategy': ['Awareness rallies, blood donation drives & tech forums'],
  'Digital Documentation': ['Archival documentation and reporting for NSS'],
  'Public Relations': ['External NGO relations and campus guest coordination'],
  'Bachelor of Computer Applications': ['Presidency University • Class of 2027'],
  'Information Science': ['Presidency School of Information Science'],
  'Metaverse & Web3 Awareness': ['President — Metaverse Society Club'],
  'Operational Logistics': ['End-to-end venue, crowd and timeline execution'],
  'Digital Productivity Tools': ['Event schedules, participant registries & reports'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Entrance',
    period: '2024',
    synopsis: 'Commencing the Bachelor of Computer Applications program at Presidency University, Bengaluru, and immersing into campus life.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Presidency Grounds',
        description: 'Joined Bachelor of Computer Applications at Presidency School of Information Science, building strong foundations in IT and campus culture.',
        tags: ['BCA', 'Presidency University', 'Bengaluru'],
        runtime: '2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Voice of NSS',
        description: 'Stepped into leadership as Media Head for NSS in November 2024, shaping communications for student initiatives.',
        tags: ['NSS', 'Media Head', 'Communications'],
        runtime: 'Nov 2024',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Media Leadership & Social Impact',
    period: '2024 – 2025',
    synopsis: 'Driving public communications for NSS while taking charge of major community welfare drives across Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Media Head',
        description: 'Led NSS Media and Communications, delivering visual coverage, promotional campaigns, and student reach for key university drives.',
        tags: ['Media Head', 'Campaigns', 'PR'],
        runtime: 'Nov 2024 – Aug 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'On-Ground Volunteer Corps',
        description: 'Mobilized volunteers and coordinated logistics for blood donation drives, awareness rallies, and community outreach.',
        tags: ['Volunteers', 'Social Welfare', 'Impact'],
        runtime: '28+ Drives',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Metaverse Society & The Community Spark',
    period: '2025',
    synopsis: 'Elected President of Metaverse Society Club in January 2025 and elevated to NSS Student Coordinator in August 2025.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Presidential Debut',
        description: 'Appointed President of Metaverse Society Club, building an active campus community around immersive tech and future computing.',
        tags: ['President', 'Metaverse Society', 'Future Tech'],
        runtime: 'Jan 2025 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'NSS Student Coordinator',
        description: 'Appointed Student Coordinator for NSS in August 2025, coordinating 28+ large-scale social welfare events.',
        tags: ['NSS Coordinator', '28+ Events', 'Operations'],
        runtime: 'Aug 2025 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Dual Presidency & 30+ Mega Events',
    period: '2026',
    synopsis: 'Achieving the rare milestone of 2× Club President while coordinating 30+ university events at the School of Information Science.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The 30+ Milestone',
        description: 'Student Coordinator for 30+ university events, handling stage operations, logistics, faculty coordination, and crowd management.',
        tags: ['30+ Events', 'School of Info Sci', 'Logistics'],
        runtime: '30+ Events',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'President — CogniCore Club',
        description: 'Appointed President of CogniCore Club in August 2026, leading student initiatives and technical culture.',
        tags: ['President', 'CogniCore Club', 'Leadership'],
        runtime: 'Aug 2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The 2× President',
        description: 'Concurrently leading two prominent university clubs — CogniCore Club and Metaverse Society Club — uniting hundreds of students.',
        tags: ['Dual President', 'Community Builder', 'Excellence'],
        runtime: 'Current Era',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "The Next Horizon",
    period: 'Now streaming',
    synopsis: 'Heading toward BCA graduation in 2027 and translating campus leadership into large-scale industry operations.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Class of 2027',
        description: 'Completing the Bachelor of Computer Applications degree at Presidency University with an extraordinary leadership track record.',
        tags: ['BCA 2027', 'Presidency University', 'Future Leader'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Dual Leadership', title: '2× Club President', detail: 'CogniCore Club & Metaverse Society Club', palette: amber },
  { label: 'Mega Event Record', title: '30+ Events', detail: 'Student Coordinator • School of Info Science', palette: crimson },
  { label: 'Social Welfare', title: '28+ NSS Events', detail: 'Student Coordinator • NSS Presidency', palette: ocean },
  { label: 'Media Leadership', title: 'Former Media Head', detail: 'NSS Media & Communication (Nov 24 – Aug 26)', palette: violet },
  { label: 'Academic Base', title: 'BCA (3rd Year)', detail: 'Presidency University • Class of 2027', palette: jade },
  { label: 'Technical Club', title: 'CogniCore President', detail: 'August 2026 – Present • Student initiatives', palette: crimson },
  { label: 'Future Tech', title: 'Metaverse President', detail: 'January 2025 – Present • Community building', palette: ocean },
  { label: 'Total Operations', title: '58+ Events', detail: 'Combined campus & NSS event coordination', palette: amber },
  { label: 'Core Superpower', title: 'People & Execution', detail: 'Team coordination, public communication & outreach', palette: jade },
  { label: 'Location Base', title: 'Bengaluru', detail: 'Active in Karnataka premier university network', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · Third Year',
    lines: ['Presidency University, Bengaluru', 'School of Information Science • Class of 2027'],
    chips: ['BCA', 'Bengaluru', 'Presidency'],
  },
  {
    kicker: 'Leadership',
    title: '2× Club President',
    lines: ['President — CogniCore Club (Aug 2026 – Present)', 'President — Metaverse Society Club (Jan 2025 – Present)'],
    chips: ['CogniCore Club', 'Metaverse Society'],
  },
  {
    kicker: 'Event Operations',
    title: '30+ University Events',
    lines: ['Student Coordinator · Presidency School of Information Science', 'End-to-end event planning, stage logistics & crowd management', 'Connecting students, faculty committees & campus communities'],
    chips: ['30+ Events', 'Coordination', 'Logistics'],
  },
  {
    kicker: 'Social Impact',
    title: '28+ NSS Events',
    lines: ['Student Coordinator — NSS (Aug 2025 – Present)', 'Former Media Head — NSS (Nov 2024 – Aug 2026)', 'Health camps, awareness rallies & social drives across Bengaluru'],
    chips: ['28+ NSS Events', 'Media Head'],
  },
  {
    kicker: 'Core Strengths',
    title: 'Leadership & Outreach',
    lines: ['Student Leadership • Event Management • Community Building', 'Public Communication • Media Coordination • Team Leadership'],
  },
  {
    kicker: 'The Vision',
    title: 'To Be Continued…',
    lines: ['Graduating BCA in 2027', 'Bringing campus leadership & operational excellence to the future of tech'],
  },
];

export type ProfileId = 'kaushal' | 'recruiter' | 'organizer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kaushal',
    name: 'Kaushal',
    blurb: 'The full story, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Leadership, achievements & resume first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'organizer',
    name: 'Event Lead',
    blurb: '30+ events, NSS operations & execution first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Media & PR',
    blurb: 'Media Head, community stories & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Kaushal', meta: 'The Pilot • BCA & Leadership', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Leadership Productions', meta: `${projects.length} Flagship Initiatives • 2024–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from Kaushal’s Profile', palette: jade },
  skills: { nav: 'Skills', card: 'Skill Universe', meta: `${skillCategories.length} Categories • Leadership & Media`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Honours • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Profile & Credentials • View & Download', palette: violet },
};
